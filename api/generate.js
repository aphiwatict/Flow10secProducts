const admin = require('firebase-admin');

// Initialize Firebase Admin for verifying ID tokens
if (!admin.apps.length) {
    admin.initializeApp({
        projectId: 'flow10secproducts'
    });
}

module.exports = async (req, res) => {
    // Enable CORS to support local development calls
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { title } = req.body;
    if (!title || !title.trim()) {
        return res.status(400).json({ error: 'Title is required' });
    }

    // 1. Authenticate Request using Firebase ID Token
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: Missing Authorization header' });
    }
    const token = authHeader.split('Bearer ')[1];
    
    let uid = "";
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        uid = decodedToken.uid;
    } catch (err) {
        console.error("Token verification failed:", err);
        return res.status(401).json({ error: 'Unauthorized: Invalid ID Token' });
    }

    // 2. Fetch Gemini API Key from environment variables (secured on Vercel backend)
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
        return res.status(500).json({ error: 'Server configuration error: Gemini API Key is not set in environment variables' });
    }

    // 3. Query Gemini API
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    
    const systemInstruction = `You are a professional Cinematic Infographic Storyboard Poster Designer. Your task is to receive a short video title (which might be in Thai or English) and turn it into a short 10-second cinematic story composed of exactly 8 panels.
Each panel represents 1.25 seconds.
You must construct the storyboard systematically, defining a clear character consistency, and exactly 8 contiguous panels.
The output MUST be returned strictly in JSON format matching the schema provided. No markdown markers, no extra text.`;

    const userPrompt = `Video Title: "${title}"
Write exactly 8 panels. The panels must tell a beautifully complete 10-second story.
Mood, colors, lighting must match the title. If the title is in Thai, keep dialogue in short Thai.

You must structure the JSON output with these fields:
1. "titleEn": The translated or polished title in English (ALL CAPS).
2. "keywords": Exactly 3 relevant stylistic keywords in English (e.g. "COZY FANTASY", "MAGIC COFFEE").
3. "character": A highly detailed paragraph describing ONE consistent main character or subject (their attire, look, facial features, key props). This character will appear in all panels.
4. "panels": Array of exactly 8 objects. Each panel object must contain:
    - "title": Short panel name (e.g., "THE OPENER", "THE SETUP", "THE FIRST ACTION", "THE TURNING POINT", "THE PROGRESS", "THE UNIQUE ANGLE", "THE FINAL ACTION", "THE REVEAL").
    - "camera": Cinematic camera angle and movement in English.
    - "action": What the character is doing in this panel.
    - "details": Visual environment, lighting, colors.
    - "emotion": The character's expression or reaction in this panel.
    - "dialogue": Short Thai dialogue ONLY if appropriate, otherwise keep empty string "".
    - "time": Timeline bounds (e.g. "0.0s - 1.25s", "1.25s - 2.5s", etc.)`;

    const requestBody = {
        contents: [
            {
                parts: [
                    { text: userPrompt }
                ]
            }
        ],
        systemInstruction: {
            parts: [
                { text: systemInstruction }
            ]
        },
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    titleEn: { type: "STRING" },
                    keywords: { type: "ARRAY", items: { type: "STRING" } },
                    character: { type: "STRING" },
                    panels: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                title: { type: "STRING" },
                                camera: { type: "STRING" },
                                action: { type: "STRING" },
                                details: { type: "STRING" },
                                emotion: { type: "STRING" },
                                dialogue: { type: "STRING" },
                                time: { type: "STRING" }
                            },
                            required: ["title", "camera", "action", "details", "emotion", "time"]
                        }
                    }
                },
                required: ["titleEn", "keywords", "character", "panels"]
            }
        }
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Gemini API Error: Status ${response.status} - ${errorText}`);
        }

        const responseData = await response.json();
        const jsonText = responseData.candidates[0].content.parts[0].text;
        const result = JSON.parse(jsonText);

        return res.status(200).json(result);
    } catch (err) {
        console.error("Gemini proxy generation failed:", err);
        return res.status(500).json({ error: "Failed to generate storyboard via Gemini API proxy: " + err.message });
    }
};
