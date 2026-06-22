// ==========================================================================
// Storyboard & Video Prompt Generator - Core Logic (Full Stack with Firebase & Gemini)
// ==========================================================================

// --- Preset Data Store (Fallbacks) ---
const PRESETS = {
    cactus: {
        titleTh: "เด็กน้อยกับแคคตัสพูดได้",
        titleEn: "THE BOY AND THE TALKING CACTUS",
        keywords: ["MAGICAL NATURE", "SECRET GARDEN", "HEARTWARMING FRIENDSHIP"],
        character: "Ken, a curious 7-year-old Thai boy with messy black hair, wearing a bright yellow t-shirt and blue denim overalls, holding a small wooden watering can. He has large expressive eyes. The other main subject is a tiny potted green cactus that has animated black dot eyes and short stubby arms.",
        panels: [
            {
                title: "THE OPENER",
                camera: "Wide establishing shot",
                action: "Ken walks into a cozy sunlit greenhouse, discovering a tiny potted cactus sitting alone on a weathered wooden bench.",
                details: "Soft dust motes float in the golden sunbeams, shelves filled with terracotta pots and hanging green vines.",
                emotion: "Curious and intrigued",
                dialogue: "ว้าว... ต้นไม้อะไรเนี่ย เจ้าน่ารักจัง",
                time: "0.0s - 1.25s"
            },
            {
                title: "THE SETUP",
                camera: "Medium shot",
                action: "Ken bends down close to the cactus, tilting his head. The cactus slightly twitches, and two tiny cartoonish eyes pop open on its green skin.",
                details: "Over-the-shoulder perspective. The clay pot has a small white smile painted on it. Ken holds his wooden watering can ready.",
                emotion: "Surprised and wide-eyed",
                dialogue: "เอ๊ะ! ขยับได้ด้วยหรอครับ?",
                time: "1.25s - 2.5s"
            },
            {
                title: "THE FIRST ACTION",
                camera: "Close-up",
                action: "Ken gently pours a small, sparkling stream of water from the watering can onto the cactus's soil.",
                details: "Close-up on the watering can nozzle and soil. Small glowing water droplets bounce off the cactus's head.",
                emotion: "Focused and careful",
                dialogue: "ฮึบ! ดื่มน้ำหน่อยนะเจ้าหนาม",
                time: "2.5s - 3.75s"
            },
            {
                title: "THE TURNING POINT",
                camera: "Extreme close-up",
                action: "The cactus absorbs the water, instantly wiggles its tiny arms, and sprouts a vibrant glowing pink flower from its top.",
                details: "Macro shot of the pink flower blooming with magical sparkles. The cactus opens a tiny mouth to speak.",
                emotion: "Overjoyed and animated",
                dialogue: "เย้! ชื่นใจจังเลย ขอบใจนะเจ้าหนู!",
                time: "3.75s - 5.0s"
            },
            {
                title: "THE PROGRESS",
                camera: "Medium close-up",
                action: "The cactus starts dancing and swaying side to side in its pot. Ken giggles and sways his shoulders, mimicking the dance.",
                details: "Warm lighting, background plants are softly blurred (bokeh). The cactus looks happy and energetic.",
                emotion: "Pure joy and amusement",
                dialogue: "ฮ่าๆ เจ้าเต้นเก่งเหมือนกันนะเนี่ย",
                time: "5.0s - 6.25s"
            },
            {
                title: "THE UNIQUE ANGLE",
                camera: "Overhead shot",
                action: "Ken sits cross-legged on the stone floor, leaning his chin on the wooden bench, listening intently as the cactus whispers a secret.",
                details: "Top-down view. Grid of wooden bench slats, yellow shirt contrast, tiny cactus leaning forward.",
                emotion: "Attentive and enchanted",
                dialogue: "กระซิบกระซาบ... จริงเหรอ!?",
                time: "6.25s - 7.5s"
            },
            {
                title: "THE FINAL ACTION",
                camera: "Close-up dramatic shot",
                action: "Ken extends his pinky finger towards the cactus. The cactus carefully reaches out one spineless green arm to touch his finger.",
                details: "Cinematic side-profile close-up, warm backlighting highlights the touch. A soft magical glow at the point of contact.",
                emotion: "Deep connection and trust",
                dialogue: "เราสัญญาว่าจะมาหาเธอทุกวันเลยนะ",
                time: "7.5s - 8.75s"
            },
            {
                title: "THE REVEAL",
                camera: "Wide emotional shot",
                action: "Ken gently hugs the cactus pot against his chest, smiling with closed eyes. The cactus has its arms wrapped around Ken's thumb.",
                details: "Warm, magical sunset orange light floods the greenhouse. The scene resolves with a beautiful, peaceful atmosphere.",
                emotion: "Warmth, love and satisfaction",
                dialogue: "ฝากตัวด้วยนะ... เจ้าหนามน้อยเพื่อนรัก",
                time: "8.75s - 10.0s"
            }
        ]
    },
    space: {
        titleTh: "หุ่นยนต์กู้ภัยอวกาศ",
        titleEn: "THE LONELY SPACE ROVER'S MISSION",
        keywords: ["SCI-FI ADVENTURE", "ALIEN PLANET", "HEARTWARMING ENCOUNTER"],
        character: "Bolt, a small, round, white and orange rescue robot with a glowing blue visor, single wheel track, and mechanical utility arms. The target subject is a cute, tiny baby alien creature resembling a glowing purple blob with big glossy yellow eyes, trapped under a glowing blue crystal fragment on a dusty purple planet.",
        panels: [
            {
                title: "THE OPENER",
                camera: "Wide establishing shot",
                action: "Bolt, the rescue robot, rolls across the desolate, crater-filled alien landscape under a twin-moon sky.",
                details: "Glowing purple flora, dusty atmosphere, blue glowing visor casts light on the dark ground.",
                emotion: "Determined exploration",
                dialogue: "ตรวจพบสัญญาณสิ่งมีชีวิตใกล้เคียง...",
                time: "0.0s - 1.25s"
            },
            {
                title: "THE SETUP",
                camera: "Medium shot",
                action: "Bolt stops and beams a scanning laser from its visor onto a glowing blue crystal formation. A tiny purple creature is trapped underneath.",
                details: "Blue holographic UI scanning lines projecting from the robot's visor, showing the trapped creature.",
                emotion: "Alert and focused",
                dialogue: "ระบุเป้าหมาย: ค้นพบสิ่งมีชีวิตต่างดาวติดอยู่",
                time: "1.25s - 2.5s"
            },
            {
                title: "THE FIRST ACTION",
                camera: "Close-up",
                action: "Bolt extends its mechanical claw arm and gently grips the edge of the heavy glowing blue crystal.",
                details: "Metallic textures, gears turning, electric sparks fly from the crystal boundary.",
                emotion: "Straining and careful",
                dialogue: "กำลังวิเคราะห์น้ำหนัก... ต้องระวังตัวเล็กน้อย",
                time: "2.5s - 3.75s"
            },
            {
                title: "THE TURNING POINT",
                camera: "Extreme close-up",
                action: "With a push, Bolt lifts the crystal. The baby alien creature looks up in absolute awe as its big eyes reflect the robot's blue visor.",
                details: "Close-up on the creature's glossy yellow eyes, showing the reflection of the robot's glowing blue visor.",
                emotion: "Awe and wonder",
                dialogue: "ปิ๊บ! (เสียงอุทานอย่างโล่งใจ)",
                time: "3.75s - 5.0s"
            },
            {
                title: "THE PROGRESS",
                camera: "Medium close-up",
                action: "The creature hops onto Bolt's metal chassis. Bolt extends a secondary soft heating pad to warm the cold, shivering creature.",
                details: "Soft orange glow from the heating pad, the creature glows a happier, brighter purple.",
                emotion: "Relieved and comforting",
                dialogue: "อุณหภูมิร่างกายต่ำเกินไป... เปิดระบบทำความร้อน",
                time: "5.0s - 6.25s"
            },
            {
                title: "THE UNIQUE ANGLE",
                camera: "Overhead shot",
                action: "Top-down view of Bolt spinning in a circle, wheels kicking up purple dust, as the creature squeals in delight on its head.",
                details: "Circular tracks in the purple dust, overhead view of the robot and the glowing blob.",
                emotion: "Playful and celebrating",
                dialogue: "คิ๊กๆ! (เสียงร้องอย่างร่าเริง)",
                time: "6.25s - 7.5s"
            },
            {
                title: "THE FINAL ACTION",
                camera: "Close-up dramatic shot",
                action: "Bolt presents a small space-berry from its storage compartment. The creature eagerly grabs and munches on it.",
                details: "Dramatic lighting, glowing fruit juice, close-up of mechanical claw holding a small neon-pink berry.",
                emotion: "Satisfied and friendly",
                dialogue: "เพิ่มพลังงานด้วยนี่สิ สารอาหารครบถ้วนนะ",
                time: "7.5s - 8.75s"
            },
            {
                title: "THE REVEAL",
                camera: "Wide emotional shot",
                action: "Bolt rolls toward the horizon where the mother alien creature awaits. The baby creature waves goodbye from its mother's side, and Bolt's visor glows a happy heart shape.",
                details: "Grand alien sunset with purple, orange, and blue hues. The family of aliens waving, robot looking back.",
                emotion: "Warm farewell, mission accomplished",
                dialogue: "บันทึกภารกิจสำเร็จ... ลาก่อนนะเจ้าตัวเล็ก",
                time: "8.75s - 10.0s"
            }
        ]
    },
    coffee: {
        titleTh: "บาริสต้าเวทมนตร์",
        titleEn: "THE MAGIC BARISTA'S SPECIAL BREW",
        keywords: ["COZY FANTASY", "MAGIC COFFEE", "DELIGHTFUL SCENT"],
        character: "Luna, a young female barista with silver hair tied in a loose ponytail, wearing a dark green canvas apron over a white linen shirt, holding a steaming copper kettle. The other key subject is a ceramic cup of coffee which glows with golden stardust.",
        panels: [
            {
                title: "THE OPENER",
                camera: "Wide establishing shot",
                action: "Luna stands behind a dark oak counter in a cozy, dimly lit cafe filled with ancient books and glowing lanterns.",
                details: "Steam rising from espresso machines, copper pots hanging, shelves of potion bottles and coffee beans.",
                emotion: "Serene and concentrated",
                dialogue: "ยินดีต้อนรับค่ะ วันนี้รับเวทมนตร์สูตรไหนดี?",
                time: "0.0s - 1.25s"
            },
            {
                title: "THE SETUP",
                camera: "Medium shot",
                action: "Luna measures glowing blue coffee beans into a vintage wooden grinder. Tiny stars float out of the grinder as she turns the handle.",
                details: "Close-up on grinding action. Golden light spills from the drawer of the grinder.",
                emotion: "Joyful anticipation",
                dialogue: "เมล็ดกาแฟดาราพราว... พร้อมบดแล้ว",
                time: "1.25s - 2.5s"
            },
            {
                title: "THE FIRST ACTION",
                camera: "Close-up",
                action: "Luna pours hot water from a copper kettle in a perfect circle over the ground coffee in a glass dripper.",
                details: "Slow motion pour, steam swirling in magical spirals, the coffee bed blooming with golden bubbles.",
                emotion: "Extreme focus",
                dialogue: "น้ำร้อนอุณหภูมิแสงจันทร์... ค่อยๆ เท...",
                time: "2.5s - 3.75s"
            },
            {
                title: "THE TURNING POINT",
                camera: "Extreme close-up",
                action: "As the first drops hit the ceramic mug, a tiny glowing constellation of Orion rises from the dark coffee liquid.",
                details: "Macro shot of the dark coffee surface, reflecting a mini 3D nebula of blue and purple stardust.",
                emotion: "Aesthetic awe",
                dialogue: "ดูสิคะ... กลุ่มดาวเริ่มก่อตัวแล้ว",
                time: "3.75s - 5.0s"
            },
            {
                title: "THE PROGRESS",
                camera: "Medium close-up",
                action: "Luna adds a splash of warm milk. As she pours, the milk swirls into a shape of a soaring phoenix in the latte art.",
                details: "Milk pitcher pouring, fluid dynamics showing the white foam shaping into a detailed bird.",
                emotion: "Skillful and proud",
                dialogue: "เติมนมแพะสวรรค์อีกนิด... กลายเป็นฟีนิกซ์สยายปีก!",
                time: "5.0s - 6.25s"
            },
            {
                title: "THE UNIQUE ANGLE",
                camera: "Overhead shot",
                action: "Top-down view of the cup. The phoenix latte art glows and actually flaps its wings, sending tiny sparkles floating upwards.",
                details: "Symmetrical top view of the wooden table, coffee cup, and shimmering gold powder dusting.",
                emotion: "Playful wizardry",
                dialogue: "ฟิ้ว... (เสียงฝุ่นเวทมนตร์ลอยฟุ้ง)",
                time: "6.25s - 7.5s"
            },
            {
                title: "THE FINAL ACTION",
                camera: "Close-up dramatic shot",
                action: "Luna slides the finished, glowing coffee mug across the counter. The steam takes the shape of a happy, sleeping kitten.",
                details: "Cup moving towards the camera, steam kitten curling up, warm wood textures.",
                emotion: "Welcoming and warm",
                dialogue: "ทานตอนร้อนๆ นะคะ จะช่วยให้ฝันดีตลอดคืน",
                time: "7.5s - 8.75s"
            },
            {
                title: "THE REVEAL",
                camera: "Wide emotional shot",
                action: "A customer takes a sip. Their eyes light up, and the entire cafe glows with a warm, golden aurora effect, bringing comfort.",
                details: "Golden hour glow filling the screen, customer smiling, Luna waving gently from behind the counter.",
                emotion: "Deep warmth and magical cozy bliss",
                dialogue: "ขอให้เป็นค่ำคืนที่แสนวิเศษนะคะ",
                time: "8.75s - 10.0s"
            }
        ]
    },
    cat: {
        titleTh: "เจ้าเหมียวหัวขโมย",
        titleEn: "THE MISCHIEVOUS CAT'S KITCHEN HEIST",
        keywords: ["COMIC SLAPSTICK", "PLAYFUL CAT", "KITCHEN ADVENTURE"],
        character: "Mochi, a chubby orange tabby cat with short stubby legs, giant green eyes, and a white patch on his chest. The other main subject is a freshly fried, golden-crispy fish sitting on a white plate on a high marble kitchen counter.",
        panels: [
            {
                title: "THE OPENER",
                camera: "Wide establishing shot",
                action: "Mochi peeks out from behind a wooden chair leg in a bright, modern kitchen. On the high counter, a steaming fried fish sits unguarded.",
                details: "Kitchen background, sunlight streaming through a window, grandma's back is turned washing dishes at the sink.",
                emotion: "Sneaky and hyper-focused",
                dialogue: "แง้ว... (เป้าหมายถูกล็อคแล้ว)",
                time: "0.0s - 1.25s"
            },
            {
                title: "THE SETUP",
                camera: "Medium shot",
                action: "Mochi crawls low to the floor, wiggling his rear end, preparing to jump onto a kitchen stool to reach the counter.",
                details: "Low camera angle. Mochi's rear wiggles side to side in slow-motion preparation.",
                emotion: "Determined and playful",
                dialogue: "กรู๊วว... (ขยับก้นเตรียมสปริงตัว)",
                time: "1.25s - 2.5s"
            },
            {
                title: "THE FIRST ACTION",
                camera: "Close-up",
                action: "Mochi springs into the air, claws extended, reaching for the edge of the high counter.",
                details: "Mid-air freeze frame, orange fur, wide focused pupils.",
                emotion: "Athletic effort",
                dialogue: "ย้ากกก! ฮึบ!",
                time: "2.5s - 3.75s"
            },
            {
                title: "THE TURNING POINT",
                camera: "Extreme close-up",
                action: "Mochi's nose twitches as he sniffs the crispy fish. Just as his paw touches the plate, Grandma's large shadow looms.",
                details: "Dramatic shadow transition. Cat's eyes expand like saucers reflecting Grandma's spatula.",
                emotion: "Absolute shock",
                dialogue: "เหมียว!? (ตาโตเท่าไข่ห่าน)",
                time: "3.75s - 5.0s"
            },
            {
                title: "THE PROGRESS",
                camera: "Medium close-up",
                action: "Grandma turns around. Mochi instantly sits down, licking his paw with fake innocence, sweeping his tail.",
                details: "Faux-innocent grooming near the fish plate, tail wiggling nervously.",
                emotion: "Innocent camouflage",
                dialogue: "แง้ว... ผมเปล่านะครับคุณยาย แค่ขึ้นมาดูแลความสะอาด",
                time: "5.0s - 6.25s"
            },
            {
                title: "THE UNIQUE ANGLE",
                camera: "Overhead shot",
                action: "Top-down view. Grandma sighs, pats Mochi, and puts a tiny shred of the fried fish into his small floor bowl.",
                details: "Grandma's hand, wooden floor, red cat bowl, delicious fried fish piece.",
                emotion: "Surprised delight",
                dialogue: "เอ้า... เจ้าส้มเอ๊ย อยากกินก็บอกยายดีๆ",
                time: "6.25s - 7.5s"
            },
            {
                title: "THE FINAL ACTION",
                camera: "Close-up dramatic shot",
                action: "Mochi hops down and sniffs the warm piece of fish in his bowl, wiggling his nose in bliss.",
                details: "Low-angle close-up, steam rising from the fresh fish fragment, whiskers vibrating.",
                emotion: "Excited craving",
                dialogue: "ง่ำ... ขอบคุณครับยาย!",
                time: "7.5s - 8.75s"
            },
            {
                title: "THE REVEAL",
                camera: "Wide emotional shot",
                action: "Mochi rolls on his back on the kitchen rug, round belly exposed, purring loudly beside a tiny clean bone.",
                details: "Cozy room lit by soft afternoon light, sleepy satisfied cat, Grandma smiling in background.",
                emotion: "Complete food coma satisfaction",
                dialogue: "ครืดๆ... (ฟินที่สุดในสามโลก)",
                time: "8.75s - 10.0s"
            }
        ]
    },
    cooking: {
        titleTh: "เมนูไข่เจียวระดับโลก",
        titleEn: "THE MASTER CHEF'S WORLD-CLASS OMELETTE",
        keywords: ["HIGH ENERGY", "CULINARY MAGIC", "FIERY KITCHEN"],
        character: "Chef Kenji, an energetic 30-year-old Thai chef with short spiky black hair, wearing a professional white chef jacket, black apron, and red bandana. He holds a heavy cast-iron wok. The other key subject is a bowl of three farm eggs that glow with golden freshness.",
        panels: [
            {
                title: "THE OPENER",
                camera: "Wide establishing shot",
                action: "Chef Kenji stands ready in a professional, sparkling stainless-steel kitchen. Fire flares up from the gas stove behind him.",
                details: "Cinematic kitchen backdrop, knives hanging on magnetic strip, copper pans, dramatic studio lighting.",
                emotion: "Confident and passionate",
                dialogue: "ยินดีต้อนรับสู่แมตช์ไข่เจียวหยุดโลกครับ!",
                time: "0.0s - 1.25s"
            },
            {
                title: "THE SETUP",
                camera: "Medium shot",
                action: "Kenji cracks three golden eggs simultaneously into a metal bowl with high speed and precision.",
                details: "Eggshells splitting, golden yolks falling in slow-motion, sparkling motion blur.",
                emotion: "Razor-sharp focus",
                dialogue: "ไข่ไก่ออร์แกนิกเกรดพรีเมียม... ปึ้ง!",
                time: "1.25s - 2.5s"
            },
            {
                title: "THE FIRST ACTION",
                camera: "Close-up",
                action: "Kenji whisks the eggs with a fork at lightning speed. The egg mixture starts foaming and swirling, glowing with air bubbles.",
                details: "Fork moves in a high-speed blur, metal clinking, egg mixture whipping into a perfect frothy golden texture.",
                emotion: "Intense energy",
                dialogue: "ตีให้ขึ้นฟูสูงสุด เพื่อความกรอบฟูนุ่มใน!",
                time: "2.5s - 3.75s"
            },
            {
                title: "THE TURNING POINT",
                camera: "Extreme close-up",
                action: "Kenji pours the beaten eggs into the sizzling hot oil in the wok. The egg instantly expands, puffing up like a giant golden cloud.",
                details: "Sizzling bubbles flaring up, hot oil droplets popping, golden steam rising, high-contrast lighting.",
                emotion: "Exciting culinary climax",
                dialogue: "ฟู่ววว! (เสียงไข่กระทบน้ำมันร้อนจัด)",
                time: "3.75s - 5.0s"
            },
            {
                title: "THE PROGRESS",
                camera: "Medium close-up",
                action: "Kenji gives the wok a powerful flick of his wrist. The giant fluffy omelette flips high into the air, spinning gracefully.",
                details: "Slow-motion flip, omelette in mid-air, flame licking the bottom of the wok, chef looking up with focus.",
                emotion: "Masterful control",
                dialogue: "และ... ฟลิป! กลับด้านกลางอากาศ!",
                time: "5.0s - 6.25s"
            },
            {
                title: "THE UNIQUE ANGLE",
                camera: "Overhead shot",
                action: "Top-down view of the wok as the omelette lands back perfectly, golden-brown and crispy-edged, sizzling over the flame.",
                details: "Perfect circle omelette, heat waves radiating, green chopped spring onions sprinkled from above like rain.",
                emotion: "Aesthetic perfection",
                dialogue: "โรยต้นหอมซอยตบท้ายเพื่อความสมบูรณ์แบบ",
                time: "6.25s - 7.5s"
            },
            {
                title: "THE FINAL ACTION",
                camera: "Close-up dramatic shot",
                action: "Kenji slides the massive, crispy, towering omelette onto a hot plate of steaming jasmine rice.",
                details: "Side angle, omelette landing softly on rice, steam billowing outwards carrying the delicious aroma.",
                emotion: "Proud presentation",
                dialogue: "จัดเสิร์ฟบนข้าวสวยร้อนๆ หอมกรุ่น...",
                time: "7.5s - 8.75s"
            },
            {
                title: "THE REVEAL",
                camera: "Wide emotional shot",
                action: "Kenji presents the dish to the camera with a thumbs up and a wide grin. The omelette looks absolutely golden and heavenly.",
                details: "Chef smiling, thumbs up, sparkles reflecting off the clean kitchen, the dish takes center stage.",
                emotion: "Absolute triumph",
                dialogue: "เสร็จแล้วครับ! ไข่เจียวฟูฟ่องระดับโลก!",
                time: "8.75s - 10.0s"
            }
        ]
    }
};

// --- App State ---
let currentState = {
    titleTh: "",
    titleEn: "",
    keywords: [],
    character: "",
    panels: []
};

let activePanelIndex = 0;

// --- Firebase State & Credentials ---
let db = null;
let auth = null;
let currentUser = null;
let currentProfile = null;
let dailyUsageCount = 0;
let cloudMode = false;

// Default Firebase Configuration (pre-configured for production deployment)
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDwat6zEbWPclrlix-jgxx3zMyTSZpMMN0",
  authDomain: "flow10secproducts.firebaseapp.com",
  projectId: "flow10secproducts",
  storageBucket: "flow10secproducts.firebasestorage.app",
  messagingSenderId: "788542533557",
  appId: "1:788542533557:web:266cadc51ca8e123d773fc",
  measurementId: "G-S3PH7D516J"
};

// Tier mapping
const LIMITS_TIERS = {
    "general": 2,
    "member_10": 10,
    "member_20": 20,
    "member_30": 30,
    "admin": Infinity
};

// Initialize Firebase & Gemini
function initializeCloudBackend() {
    const creds = window.ConfigManager.getCredentials();
    
    // Choose between user-configured Firebase config and the preloaded default config
    const activeFirebaseConfig = (creds && creds.firebaseConfig) ? creds.firebaseConfig : DEFAULT_FIREBASE_CONFIG;
    
    if (activeFirebaseConfig) {
        try {
            // Check if already initialized to avoid re-init error
            if (firebase.apps.length === 0) {
                firebase.initializeApp(activeFirebaseConfig);
            }
            db = firebase.firestore();
            auth = firebase.auth();
            cloudMode = true;
            console.log("Firebase Backend initialized successfully using default config.");
            
            // Bind Auth listener
            auth.onAuthStateChanged(onUserSessionChanged);
        } catch (err) {
            console.error("Firebase initialization failed:", err);
            cloudMode = false;
            showToast("⚠️ โครงร่าง Firebase ไม่ถูกต้อง ทำงานในโหมด Local");
        }
    } else {
        cloudMode = false;
        console.log("No credentials found. App running in Local Mock mode.");
        renderGuestAuthWidget();
    }
}

// --- User Profile Session Listener ---
async function onUserSessionChanged(user) {
    currentUser = user;
    if (user) {
        // Fetch or create user profile in Firestore
        const userRef = db.collection("users").doc(user.uid);
        try {
            let doc = await userRef.get();
            if (!doc.exists) {
                // Initialize default profile safely
                const initialProfile = {
                    email: user.email,
                    role: "general",
                    signupDate: firebase.firestore.FieldValue.serverTimestamp()
                };
                await userRef.set(initialProfile);
                doc = await userRef.get();
            }
            
            currentProfile = doc.data();
            
            // Set up real-time listener for current day's usage
            listenToDailyCredits(user.uid);
            
            // Render Profile Widget
            renderUserProfileCard();
            
            // Fetch History list
            loadHistoryLogs(user.uid);
            
            // Admin panel visibility
            const adminTabBtn = document.getElementById("tab-btn-admin");
            if (currentProfile.role === "admin") {
                adminTabBtn.style.display = "flex";
                loadAdminUserPanel();
            } else {
                adminTabBtn.style.display = "none";
            }
        } catch (e) {
            console.error("Error loading user profile:", e);
            showToast("เกิดข้อผิดพลาดในการโหลดโปรไฟล์ผู้ใช้งาน");
        }
    } else {
        currentProfile = null;
        dailyUsageCount = 0;
        renderGuestAuthWidget();
        
        // Hide Admin Tab & History Tab contents
        document.getElementById("tab-btn-admin").style.display = "none";
        document.getElementById("history-items-container").innerHTML = `
            <div class="history-placeholder">
                <i class="fa-solid fa-box-open"></i>
                <p>เข้าสู่ระบบเพื่อบันทึกและดูประวัติการสร้างส่วนตัวของคุณ</p>
            </div>
        `;
        
        // If active tab is admin, fallback to veo tab
        const activeTab = document.querySelector(".tab-btn.active");
        if (activeTab && (activeTab.getAttribute("data-tab") === "tab-admin" || activeTab.getAttribute("data-tab") === "tab-history")) {
            switchTab("tab-veo");
        }
    }
}

// Listen to usage credits for current date (YYYY-MM-DD)
function listenToDailyCredits(uid) {
    const today = getTodayDateStr();
    db.collection("users").doc(uid).collection("usage").doc(today)
      .onSnapshot((doc) => {
          if (doc.exists) {
              dailyUsageCount = doc.data().count || 0;
          } else {
              dailyUsageCount = 0;
          }
          renderUserProfileCard();
      });
}

function getTodayDateStr() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const date = String(d.getDate()).padStart(2, '0');
    return `${year}${month}${date}`;
}

// Render User Status
function renderUserProfileCard() {
    const container = document.getElementById("auth-widget");
    if (!currentUser || !currentProfile) {
        renderGuestAuthWidget();
        return;
    }
    
    const role = currentProfile.role || "general";
    const limit = LIMITS_TIERS[role];
    const displayLimit = limit === Infinity ? "∞" : limit;
    
    let tierText = "ผู้ใช้ทั่วไป";
    let badgeClass = "badge-free";
    if (role === "admin") { tierText = "แอดมิน"; badgeClass = "badge-admin"; }
    else if (role === "member_10") { tierText = "VIP 10"; badgeClass = "badge-member10"; }
    else if (role === "member_20") { tierText = "VIP 20"; badgeClass = "badge-member20"; }
    else if (role === "member_30") { tierText = "VIP 30"; badgeClass = "badge-member30"; }

    container.innerHTML = `
        <div class="user-profile-card">
            <span class="badge-tier ${badgeClass}">${tierText}</span>
            <span class="user-email" title="${currentUser.email}">${currentUser.email}</span>
            <span class="credits-count" title="โควตาใช้งานวันนี้">เครดิต: ${dailyUsageCount}/${displayLimit}</span>
            <button class="btn-logout" id="btn-logout" title="ออกจากระบบ">
                <i class="fa-solid fa-right-from-bracket"></i>
            </button>
        </div>
    `;
    
    // Bind Logout
    document.getElementById("btn-logout").addEventListener("click", () => {
        auth.signOut().then(() => {
            showToast("ออกจากระบบเรียบร้อยแล้ว");
        });
    });
}

function renderGuestAuthWidget() {
    const container = document.getElementById("auth-widget");
    container.innerHTML = `
        <button id="btn-auth-trigger" class="btn btn-secondary btn-sm">
            <i class="fa-solid fa-user"></i> เข้าสู่ระบบ
        </button>
    `;
    
    document.getElementById("btn-auth-trigger").addEventListener("click", () => {
        openAuthModal(false); // Sign In mode
    });
}

// --- Load History logs ---
function loadHistoryLogs(uid) {
    const container = document.getElementById("history-items-container");
    db.collection("users").doc(uid).collection("storyboards")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
          if (snapshot.empty) {
              container.innerHTML = `
                  <div class="history-placeholder">
                      <i class="fa-solid fa-history"></i>
                      <p>ยังไม่มีประวัติการสร้างสตอรี่บอร์ด</p>
                  </div>
              `;
              return;
          }
          
          container.innerHTML = "";
          snapshot.forEach((doc) => {
              const data = doc.data();
              const date = data.timestamp ? data.timestamp.toDate().toLocaleString('th-TH', {hour12:false}) : "กำลังบันทึก...";
              const card = document.createElement("div");
              card.className = "history-card";
              card.innerHTML = `
                  <div class="history-details">
                      <h4>${data.titleTh}</h4>
                      <p>${data.titleEn} • ${date}</p>
                  </div>
                  <div class="history-actions-row">
                      <button class="history-btn-load" data-id="${doc.id}">โหลดข้อมูล</button>
                      <button class="history-btn-delete" data-id="${doc.id}"><i class="fa-solid fa-trash"></i></button>
                  </div>
              `;
              
              // Load action
              card.querySelector(".history-btn-load").addEventListener("click", (e) => {
                  e.stopPropagation();
                  loadStoryboardFromData(data);
                  showToast("โหลดสตอรี่บอร์ดจากประวัติสำเร็จ!");
                  switchTab("tab-veo");
              });
              
              // Delete action
              card.querySelector(".history-btn-delete").addEventListener("click", (e) => {
                  e.stopPropagation();
                  if (confirm(`คุณต้องการลบประวัติเรื่อง "${data.titleTh}" หรือไม่?`)) {
                      db.collection("users").doc(uid).collection("storyboards").doc(doc.id).delete()
                        .then(() => {
                            showToast("ลบข้อมูลประวัติสำเร็จ");
                        });
                  }
              });
              
              container.appendChild(card);
          });
      });
}

function loadStoryboardFromData(data) {
    currentState = {
        titleTh: data.titleTh,
        titleEn: data.titleEn,
        keywords: [...data.keywords],
        character: data.character,
        panels: JSON.parse(JSON.stringify(data.panels))
    };
    document.getElementById("story-title").value = data.titleTh;
    updateUI();
}

// --- Admin Panel Console Setup ---
function loadAdminUserPanel() {
    if (!cloudMode || !currentProfile || currentProfile.role !== "admin") return;
    
    db.collection("users").get().then((snapshot) => {
        const tbody = document.getElementById("admin-users-list");
        tbody.innerHTML = "";
        
        snapshot.forEach((doc) => {
            const user = doc.data();
            const uid = doc.id;
            const tr = document.createElement("tr");
            
            // Format role selection
            tr.innerHTML = `
                <td><strong>${user.email}</strong></td>
                <td>
                    <select class="admin-select-role" data-uid="${uid}">
                        <option value="general" ${user.role === 'general' ? 'selected' : ''}>General (2/วัน)</option>
                        <option value="member_10" ${user.role === 'member_10' ? 'selected' : ''}>Member VIP 10 (10/วัน)</option>
                        <option value="member_20" ${user.role === 'member_20' ? 'selected' : ''}>Member VIP 20 (20/วัน)</option>
                        <option value="member_30" ${user.role === 'member_30' ? 'selected' : ''}>Member VIP 30 (30/วัน)</option>
                        <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Admin Console (Unlimited)</option>
                    </select>
                </td>
                <td>${LIMITS_TIERS[user.role || 'general'] === Infinity ? 'Unlimited' : LIMITS_TIERS[user.role || 'general'] + ' requests/day'}</td>
                <td>
                    <button class="btn btn-primary btn-sm btn-save-role" data-uid="${uid}"><i class="fa-solid fa-save"></i> บันทึก</button>
                </td>
            `;
            
            // Save role click
            tr.querySelector(".btn-save-role").addEventListener("click", () => {
                const select = tr.querySelector(".admin-select-role");
                const newRole = select.value;
                
                db.collection("users").doc(uid).update({
                    role: newRole
                }).then(() => {
                    showToast("อัปเดตสิทธิ์บทบาทสัญญาสมาชิกสำเร็จ!");
                    loadAdminUserPanel();
                }).catch(err => {
                    console.error(err);
                    showToast("ไม่สามารถอัปเดตได้เนื่องจากติด Security Rules");
                });
            });
            
            tbody.appendChild(tr);
        });
    });
}

// --- Gemini AI Request Engine ---
async function generateStoryboardWithGemini(title) {
    const creds = window.ConfigManager.getCredentials();
    
    // Determine environment. If hostname is empty or includes file protocol, it's local offline mode.
    const isLocalEnvironment = window.location.protocol === "file:";
    
    // If local, we MUST have a client-side Gemini API key in LocalStorage
    if (isLocalEnvironment && (!creds || !creds.geminiApiKey)) {
        showToast("⚠️ ไม่พบคีย์ Gemini API Key สำหรับการรันบนโลคอลไฟล์");
        openConfigModal();
        return;
    }
    
    // 1. Check Credits constraints
    if (cloudMode && currentUser && currentProfile) {
        const role = currentProfile.role || "general";
        const limit = LIMITS_TIERS[role];
        if (dailyUsageCount >= limit) {
            alert(`⚠️ โควตาการสร้างวิดีโอวันนี้ของคุณเต็มแล้ว! (${dailyUsageCount}/${limit} ครั้ง)\nสมัครสมาชิก VIP หรือติดต่อผู้ดูแลระบบเพื่อปรับเครดิตเพิ่ม`);
            return;
        }
    } else if (cloudMode && !currentUser) {
        alert("🔒 โปรดเข้าสู่ระบบเพื่อเจนสตอรี่บอร์ด AI จริง และบันทึกประวัติการสร้างของคุณ");
        openAuthModal(false);
        return;
    }

    // Show loading state in outputs
    document.getElementById("veo-prompt-text").textContent = "กำลังวิเคราะห์เรื่องราวและส่งให้ปัญญาประดิษฐ์ AI (Gemini 1.5 Flash) เจนโครงร่างสตอรี่บอร์ด กรุณารอประมาณ 5-10 วินาที...";
    document.getElementById("poster-prompt-text").textContent = "กำลังส่งหัวข้อวิเคราะห์กับ Gemini API...";
    document.getElementById("svg-poster-container").innerHTML = `<div class="history-placeholder"><i class="fa-solid fa-circle-notch fa-spin"></i><p>กำลังคำนวณและวาด Vector Storyboard Poster...</p></div>`;

    // 2. Perform Generation (using Proxy if on web, or direct call if local)
    let result = null;
    
    try {
        if (!isLocalEnvironment) {
            // Web Deployment Mode: Route call securely through Vercel Serverless Function proxy
            const idToken = await currentUser.getIdToken(true);
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${idToken}`
                },
                body: JSON.stringify({ title })
            });
            
            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`Proxy generation failed: ${errText}`);
            }
            
            result = await response.json();
            
        } else {
            // Local Offline Mode: Make direct browser-to-Gemini API call using LocalStorage key
            const key = creds.geminiApiKey;
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
                contents: [{ parts: [{ text: userPrompt }] }],
                systemInstruction: { parts: [{ text: systemInstruction }] },
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

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody)
            });
            
            if (!response.ok) {
                throw new Error(`Gemini API Error: Status ${response.status}`);
            }
            
            const responseData = await response.json();
            const jsonText = responseData.candidates[0].content.parts[0].text;
            result = JSON.parse(jsonText);
        }

        // 3. Post-Generation DB updates (increment daily usage + save storyboard to history)
        if (cloudMode && currentUser && result) {
            const today = getTodayDateStr();
            const usageRef = db.collection("users").doc(currentUser.uid).collection("usage").doc(today);
            
            const doc = await usageRef.get();
            if (!doc.exists) {
                await usageRef.set({ count: 1 });
            } else {
                await usageRef.update({ count: firebase.firestore.FieldValue.increment(1) });
            }
            
            await db.collection("users").doc(currentUser.uid).collection("storyboards").add({
                titleTh: title,
                titleEn: result.titleEn,
                keywords: result.keywords,
                character: result.character,
                panels: result.panels,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        
        // 4. Load the generated storyboard into workspace
        loadStoryboardFromData({
            titleTh: title,
            titleEn: result.titleEn,
            keywords: result.keywords,
            character: result.character,
            panels: result.panels
        });
        
        showToast("🪄 ปัญญาประดิษฐ์ AI สังเคราะห์สตอรี่บอร์ดสำเร็จ!");
        
    } catch (err) {
        console.error("AI Generation failed:", err);
        showToast("❌ เจนบอร์ดล้มเหลว ตรวจสอบคีย์ API หรือประวัติเครดิตของคุณ");
        compilePrompts(); // restore text
    }
}

// --- Load Preset ---
function loadPreset(key) {
    const data = PRESETS[key];
    if (!data) return;
    
    // Save to localStorage to guarantee a different selection on next refresh
    localStorage.setItem("lastStoryboardPreset", key);
    
    currentState = {
        titleTh: data.titleTh,
        titleEn: data.titleEn,
        keywords: [...data.keywords],
        character: data.character,
        panels: JSON.parse(JSON.stringify(data.panels)) // deep clone
    };
    
    // Set input value
    document.getElementById("story-title").value = data.titleTh;
    
    // Sync the active preset chip in the UI
    const chips = document.querySelectorAll(".preset-chips .chip");
    if (chips.length > 0) {
        chips.forEach(c => {
            if (c.getAttribute("data-preset") === key) {
                c.classList.add("active");
            } else {
                c.classList.remove("active");
            }
        });
    }
    
    updateUI();
}

// --- Build UI Components ---
function updateUI() {
    renderPanelsGrid();
    compilePrompts();
    renderSVGEngine();
}

// Render Panels Grid on Workspace
function renderPanelsGrid() {
    const grid = document.getElementById("panels-grid");
    grid.innerHTML = "";
    
    currentState.panels.forEach((panel, index) => {
        const card = document.createElement("div");
        card.className = `panel-card ${index === activePanelIndex ? 'active' : ''}`;
        card.setAttribute("data-index", index);
        
        // Pick an icon based on camera angle
        let iconClass = "fa-video";
        if (panel.camera.toLowerCase().includes("wide")) iconClass = "fa-mountain";
        else if (panel.camera.toLowerCase().includes("close")) iconClass = "fa-magnifying-glass-plus";
        else if (panel.camera.toLowerCase().includes("overhead")) iconClass = "fa-arrows-down-to-line";
        
        card.innerHTML = `
            <div class="panel-thumbnail">
                <div class="panel-badge">SHOT ${index + 1}</div>
                <div class="panel-time">${panel.time}</div>
                <div class="panel-thumb-placeholder">
                    <i class="fa-solid ${iconClass}"></i>
                    <span>${panel.title}</span>
                </div>
            </div>
            <div class="panel-info">
                <div class="panel-info-header">
                    <span class="panel-info-title">${panel.title}</span>
                    <span class="panel-camera-tag">${panel.camera.split(' ')[0]}</span>
                </div>
                <p class="panel-action-desc">${panel.action}</p>
                ${panel.dialogue ? `
                    <div class="panel-dialogue-snippet">
                        <i class="fa-solid fa-comment-dots"></i>
                        <span>"${panel.dialogue}"</span>
                    </div>
                ` : ''}
            </div>
        `;
        
        card.addEventListener("click", () => {
            openEditDrawer(index);
        });
        
        grid.appendChild(card);
    });
}

// --- Drawer Editor Logic ---
function openEditDrawer(index) {
    activePanelIndex = index;
    
    // Highlight active card
    document.querySelectorAll(".panel-card").forEach((card, idx) => {
        if (idx === index) card.classList.add("active");
        else card.classList.remove("active");
    });
    
    const panel = currentState.panels[index];
    
    // Populate form
    document.getElementById("edit-panel-num").textContent = index + 1;
    document.getElementById("edit-title").value = panel.title;
    document.getElementById("edit-camera").value = panel.camera;
    document.getElementById("edit-action").value = panel.action;
    document.getElementById("edit-details").value = panel.details;
    document.getElementById("edit-emotion").value = panel.emotion;
    document.getElementById("edit-dialogue").value = panel.dialogue || "";
    
    // Open drawer
    document.getElementById("edit-drawer").classList.add("open");
}

function closeEditDrawer() {
    document.getElementById("edit-drawer").classList.remove("open");
}

function savePanelEdits() {
    const index = activePanelIndex;
    const panel = currentState.panels[index];
    
    panel.title = document.getElementById("edit-title").value;
    panel.camera = document.getElementById("edit-camera").value;
    panel.action = document.getElementById("edit-action").value;
    panel.details = document.getElementById("edit-details").value;
    panel.emotion = document.getElementById("edit-emotion").value;
    panel.dialogue = document.getElementById("edit-dialogue").value;
    
    closeEditDrawer();
    updateUI();
    showToast("บันทึกการแก้ไขช็อตที่ " + (index + 1) + " สำเร็จ!");
}

// --- Prompt Compilation Logic ---
function compilePrompts() {
    // 1. Storyboard Poster Prompt (Step 1)
    let posterPrompt = `Create a crisp, clean infographic storyboard poster for ${currentState.titleEn}. Wide 16:9 layout, white background, clean black borders, bold modern typography, premium cinematic 3D stylized rendering, high-detail visual storytelling, professional commercial storyboard style.

Mood and visual style must match the topic:
* Choose lighting, colors, props, environment, and atmosphere that fit the title.
* Keep the scene visually clear, cinematic, and easy to understand.
* Make the story suitable for a short 10-second video.
* Use the same main character or main subject consistently throughout all panels.
* Avoid confusing details, random objects, or unrelated background elements.
* If the topic includes dialogue, write the dialogue in Thai.
* Avoid unsafe, violent, shocking, or prohibited words. Use safe creative wording instead.

Top header:
• ${currentState.titleEn}
• TOTAL VIDEO TIME: 10 SECONDS
• 8 SHOTS · ${currentState.keywords.join(' · ')}
• Legend icons: ACTION, REACTION, TIME HINT, KEY OBJECT

Main character / subject:
${currentState.character}

Storyboard structure:
Create exactly 8 panels.
Each panel should represent about 1.25 seconds.
Each panel must include:
* Panel title
* Camera angle
* Main action
* Visual details
* Emotion or reaction
* Time hint if useful
* Thai dialogue only if needed

8 panels:
`;

    currentState.panels.forEach((p, idx) => {
        posterPrompt += `
Panel ${idx + 1} — ${p.title}:
* Camera angle: ${p.camera}
* Main action: ${p.action}
* Visual details: ${p.details}
* Emotion or reaction: ${p.emotion}
* Time hint: ${p.time}
${p.dialogue ? `* Thai dialogue: "${p.dialogue}"` : ''}
`;
    });

    document.getElementById("poster-prompt-text").textContent = posterPrompt.trim();

    // 2. Veo 3 Video Prompt (Step 2)
    let veoPrompt = `สร้างวิดีโอ 10 วินาที ความยาวรวมทั้งหมดแบ่งเป็น 8 ฉากต่อเนื่องกัน โดยใช้คาแรคเตอร์และสไตล์ภาพเดียวกันตลอดทั้งวิดีโอ

Character Consistency: ${currentState.character}
สไตล์ภาพ: Cinematic Animation, Pixar-quality 3D, ultra detailed, realistic lighting, expressive facial animation, consistent character design across all scenes, 16:9, high quality movie rendering, professional storyboard flow.

--------------------------------------------------
`;

    currentState.panels.forEach((p, idx) => {
        veoPrompt += `
ฉากที่ ${idx + 1} — ${p.title} (เวลา ${p.time})
- มุมกล้อง (Camera): ${p.camera}
- ตัวละครหรือวัตถุ (Subject): ${currentState.character.split('.')[0]} มีอารมณ์ ${p.emotion}
- การกระทำ (Action): ${p.action}
- ฉากและบรรยากาศ (Scene & Atmosphere): ${p.details}
- เสียงประกอบ (Audio): ${p.dialogue ? `บทพูดภาษาไทยเสียงสว่างสดใส: "${p.dialogue}"` : 'ไม่มีบทพูด มีเพียงเสียงประกอบและดนตรีคลอเบาๆ'}
- เสียงแวดล้อม: เสียงบรรยากาศที่สอดคล้องกับธรรมชาติในฉาก
`;
    });

    document.getElementById("veo-prompt-text").textContent = veoPrompt.trim();
}

// --- Render SVG Poster Engine ---
function renderSVGEngine() {
    const container = document.getElementById("svg-poster-container");
    if (!container) return;
    
    // Width and height for 16:9 infographic poster
    const w = 1200;
    const h = 675;
    
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="100%">
        <!-- Background -->
        <rect width="${w}" height="${h}" fill="#ffffff" />
        
        <!-- Double Outer Borders -->
        <rect x="15" y="15" width="${w-30}" height="${h-30}" fill="none" stroke="#000000" stroke-width="4" />
        <rect x="23" y="23" width="${w-46}" height="${h-46}" fill="none" stroke="#000000" stroke-width="1.5" />
        
        <!-- Header Divider -->
        <line x1="23" y1="105" x2="${w-23}" y2="105" stroke="#000000" stroke-width="2" />
        
        <!-- Title & Header Info -->
        <text x="40" y="65" font-family="'Outfit', 'Inter', sans-serif" font-weight="900" font-size="28" fill="#000000" letter-spacing="1.5">${currentState.titleEn}</text>
        <text x="40" y="90" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#475569" letter-spacing="1">TOTAL TIME: 10 SECONDS  •  8 PANEL COMMERCIAL STORYBOARD  •  ${currentState.keywords.join('  •  ')}</text>
        
        <!-- Legend Icons (Action, Reaction, Time, Object) -->
        <g transform="translate(${w-350}, 45)">
            <rect x="0" y="0" width="80" height="24" fill="#000000" rx="4" />
            <text x="40" y="16" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#ffffff" text-anchor="middle">ACTION [A]</text>
            
            <rect x="85" y="0" width="80" height="24" fill="#000000" rx="4" />
            <text x="125" y="16" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#ffffff" text-anchor="middle">REACTION [R]</text>
            
            <rect x="170" y="0" width="80" height="24" fill="#000000" rx="4" />
            <text x="210" y="16" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#ffffff" text-anchor="middle">TIME HINT [T]</text>
            
            <rect x="255" y="0" width="80" height="24" fill="#000000" rx="4" />
            <text x="295" y="16" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#ffffff" text-anchor="middle">OBJECT [O]</text>
        </g>
        
        <!-- Character Description Box at Bottom -->
        <rect x="40" y="595" width="${w-80}" height="50" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="6" />
        <text x="55" y="615" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#0f172a">MAIN CHARACTER / KEY SUBJECT:</text>
        <text x="55" y="632" font-family="'Inter', sans-serif" font-size="10" fill="#475569">${truncateText(currentState.character, 175)}</text>
    `;
    
    // Render 8 Panels in a 2x4 grid
    const colCount = 4;
    const rowCount = 2;
    const startX = 40;
    const startY = 125;
    const gapX = 20;
    const gapY = 20;
    
    const panelW = (w - 80 - (gapX * (colCount - 1))) / colCount; 
    const panelH = (h - 125 - 100 - gapY) / rowCount; 
    
    currentState.panels.forEach((p, idx) => {
        const row = Math.floor(idx / colCount);
        const col = idx % colCount;
        
        const px = startX + col * (panelW + gapX);
        const py = startY + row * (panelH + gapY);
        
        // Panel Box
        svg += `
            <g transform="translate(${px}, ${py})">
                <!-- Panel border -->
                <rect width="${panelW}" height="${panelH}" fill="none" stroke="#000000" stroke-width="1.5" />
                
                <!-- Panel Header -->
                <rect width="${panelW}" height="22" fill="#000000" />
                <text x="8" y="15" font-family="'Outfit', sans-serif" font-weight="800" font-size="9" fill="#ffffff">SHOT ${idx + 1} — ${p.title}</text>
                <text x="${panelW - 8}" y="15" font-family="'Inter', sans-serif" font-weight="600" font-size="8" fill="#e2e8f0" text-anchor="end">${p.time}</text>
                
                <!-- Simulated Visual Sketch / Art Frame placeholder -->
                <rect x="8" y="30" width="${panelW - 16}" height="90" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
                
                <!-- Stylized abstract sketch inside visual placeholder based on details -->
                ${renderAbstractSketch(panelW - 16, 90, p.camera, idx)}
                
                <!-- Camera Tag overlay on sketch -->
                <rect x="12" y="34" width="105" height="15" fill="rgba(0,0,0,0.6)" rx="2" />
                <text x="16" y="44" font-family="'Inter', sans-serif" font-weight="700" font-size="7" fill="#ffffff">${truncateText(p.camera, 22)}</text>
                
                <!-- Action Description -->
                <text x="8" y="132" font-family="'Inter', sans-serif" font-weight="700" font-size="8" fill="#000000">[A]</text>
                <text x="24" y="132" font-family="'Inter', sans-serif" font-size="8" fill="#334155">
                    <tspan x="24" dy="0">${truncateText(p.action, 50)}</tspan>
                </text>
                
                <!-- Reaction Description -->
                <text x="8" y="152" font-family="'Inter', sans-serif" font-weight="700" font-size="8" fill="#000000">[R]</text>
                <text x="24" y="152" font-family="'Inter', sans-serif" font-size="8" fill="#475569" font-style="italic">${truncateText(p.emotion, 45)}</text>
                
                <!-- Thai Dialogue (if exists) -->
                ${p.dialogue ? `
                    <rect x="8" y="165" width="${panelW - 16}" height="28" fill="#f0fdf4" stroke="#dcfce7" stroke-width="0.5" rx="3" />
                    <text x="14" y="177" font-family="'Sarabun', 'Inter', sans-serif" font-size="8" fill="#15803d" font-weight="500">บทพูด: "${truncateText(p.dialogue, 42)}"</text>
                ` : `
                    <!-- Ambient Sound hint -->
                    <text x="8" y="176" font-family="'Inter', sans-serif" font-size="7.5" fill="#94a3b8">BGM: Ambient background score</text>
                `}
            </g>
        `;
    });
    
    svg += `</svg>`;
    container.innerHTML = svg;
}

// Draw stylized vector sketches
function renderAbstractSketch(w, h, camera, index) {
    const midX = w / 2 + 8;
    const midY = h / 2 + 30;
    
    let colorA = "#cbd5e1";
    let colorB = "#94a3b8";
    let colorC = "#64748b";
    
    if (index === 0) { 
        return `
            <path d="M 8 100 Q ${midX} 80 ${w+8} 95 L ${w+8} 120 L 8 120 Z" fill="${colorB}" opacity="0.6"/>
            <polygon points="20,80 50,45 80,80" fill="${colorA}" opacity="0.4"/>
            <polygon points="60,80 110,35 150,80" fill="${colorA}" opacity="0.5"/>
            <circle cx="${midX + 20}" cy="75" r="7" fill="${colorC}" />
            <line x1="${midX + 20}" y1="82" x2="${midX + 20}" y2="92" stroke="${colorC}" stroke-width="2" />
        `;
    } else if (index === 3) { 
        return `
            <circle cx="${midX}" cy="${midY}" r="22" fill="#fef08a" opacity="0.3" />
            <circle cx="${midX}" cy="${midY}" r="14" fill="#fde047" opacity="0.5" />
            <circle cx="${midX}" cy="${midY}" r="7" fill="#eab308" />
            <line x1="${midX}" y1="${midY - 30}" x2="${midX}" y2="${midY - 20}" stroke="#eab308" stroke-width="1.5" />
            <line x1="${midX}" y1="${midY + 20}" x2="${midX}" y2="${midY + 30}" stroke="#eab308" stroke-width="1.5" />
            <line x1="${midX - 30}" y1="${midY}" x2="${midX - 20}" y2="${midY}" stroke="#eab308" stroke-width="1.5" />
            <line x1="${midX + 20}" y1="${midY}" x2="${midX + 30}" y2="${midY}" stroke="#eab308" stroke-width="1.5" />
        `;
    } else if (camera.toLowerCase().includes("close")) { 
        return `
            <circle cx="${midX}" cy="${midY - 5}" r="20" fill="${colorB}" />
            <circle cx="${midX - 7}" cy="${midY - 7}" r="2.5" fill="#000000" />
            <circle cx="${midX + 7}" cy="${midY - 7}" r="2.5" fill="#000000" />
            <path d="M ${midX - 5} ${midY + 2} Q ${midX} ${midY + 8} ${midX + 5} ${midY + 2}" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" />
            <path d="M ${midX - 25} 120 C ${midX - 20} 95 ${midX + 20} 95 ${midX + 25} 120 Z" fill="${colorC}" />
        `;
    } else if (camera.toLowerCase().includes("overhead")) { 
        return `
            <line x1="8" y1="50" x2="${w+8}" y2="50" stroke="${colorA}" stroke-width="0.5"/>
            <line x1="8" y1="80" x2="${w+8}" y2="80" stroke="${colorA}" stroke-width="0.5"/>
            <line x1="60" y1="30" x2="60" y2="120" stroke="${colorA}" stroke-width="0.5"/>
            <circle cx="${midX}" cy="${midY}" r="15" fill="${colorC}" opacity="0.8"/>
            <circle cx="${midX}" cy="${midY}" r="8" fill="${colorB}"/>
        `;
    } else { 
        return `
            <line x1="8" y1="95" x2="${w+8}" y2="95" stroke="#000" stroke-width="1"/>
            <path d="M 45 120 C 50 85 80 85 85 120 Z" fill="${colorC}" />
            <circle cx="65" cy="70" r="12" fill="${colorB}" />
            <rect x="${midX + 20}" y="75" width="20" height="20" rx="3" fill="${colorA}" stroke="#475569" stroke-width="1"/>
            <path d="M ${midX+30} 75 Q ${midX+40} 60 ${midX+25} 55" fill="none" stroke="#475569" stroke-width="1" />
        `;
    }
}

// Helpers
function truncateText(str, maxLen) {
    if (str.length <= maxLen) return str;
    return str.slice(0, maxLen - 3) + "...";
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        showToast("คัดลอกไปยังคลิปบอร์ดแล้ว!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// Switch Tabs
function switchTab(tabId) {
    document.querySelectorAll(".tab-btn").forEach(b => {
        if (b.getAttribute("data-tab") === tabId) b.classList.add("active");
        else b.classList.remove("active");
    });
    
    document.querySelectorAll(".tab-pane").forEach(p => {
        if (p.id === tabId) p.classList.add("active");
        else p.classList.remove("active");
    });
}

// --- Credentials Modal Logic ---
function openConfigModal() {
    const creds = window.ConfigManager.getCredentials();
    if (creds) {
        document.getElementById("config-gemini-key").value = creds.geminiApiKey || "";
        document.getElementById("config-firebase-json").value = creds.firebaseConfig ? JSON.stringify(creds.firebaseConfig, null, 2) : "";
    }
    document.getElementById("config-modal").classList.add("open");
}

function closeConfigModal() {
    document.getElementById("config-modal").classList.remove("open");
}

function saveConfigCredentials() {
    const geminiKey = document.getElementById("config-gemini-key").value.trim();
    const firebaseJsonStr = document.getElementById("config-firebase-json").value.trim();
    
    if (!geminiKey) {
        alert("โปรดกรอก Gemini API Key");
        return;
    }
    
    let firebaseConfig = null;
    if (firebaseJsonStr) {
        try {
            firebaseConfig = JSON.parse(firebaseJsonStr);
        } catch (e) {
            alert("รูปแบบ Firebase JSON Object ไม่ถูกต้อง กรุณาตรวจสอบวงเล็บและเครื่องหมายอัญประกาศ");
            return;
        }
    }
    
    try {
        window.ConfigManager.saveCredentials(firebaseConfig, geminiKey);
        closeConfigModal();
        showToast("บันทึกคีย์ความปลอดภัยเชื่อมต่อสำเร็จ!");
        
        // Re-initialize backend instantly
        initializeCloudBackend();
    } catch (e) {
        alert("ไม่สามารถบันทึกค่าได้: " + e.message);
    }
}

// --- Auth Modal Logic ---
let isRegisterMode = false;

function openAuthModal(register = false) {
    isRegisterMode = register;
    document.getElementById("auth-error-msg").style.display = "none";
    document.getElementById("auth-email").value = "";
    document.getElementById("auth-password").value = "";
    document.getElementById("auth-confirm-password").value = "";
    
    const title = document.getElementById("auth-modal-title");
    const submitBtn = document.getElementById("btn-auth-submit");
    const toggleText = document.getElementById("auth-toggle-text");
    const toggleLink = document.getElementById("link-toggle-auth");
    const confirmGroup = document.getElementById("group-confirm-password");
    
    if (register) {
        title.innerHTML = "📝 สมัครสมาชิกใหม่";
        submitBtn.textContent = "ลงทะเบียนสมัครสมาชิก";
        toggleText.textContent = "มีบัญชีอยู่แล้วใช่หรือไม่?";
        toggleLink.textContent = "เข้าสู่ระบบ";
        confirmGroup.style.display = "flex";
    } else {
        title.innerHTML = "🔐 เข้าสู่ระบบ";
        submitBtn.textContent = "ยืนยันเข้าสู่ระบบ";
        toggleText.textContent = "ยังไม่มีบัญชีใช่หรือไม่?";
        toggleLink.textContent = "สมัครสมาชิกใหม่";
        confirmGroup.style.display = "none";
    }
    
    document.getElementById("auth-modal").classList.add("open");
}

function closeAuthModal() {
    document.getElementById("auth-modal").classList.remove("open");
}

// Google Sign-in Handler
async function handleGoogleSignIn() {
    if (!cloudMode) {
        alert("โปรดคลิก Setup API เพื่อตั้งค่าเชื่อมต่อ Firebase ก่อนใช้งานระบบสมาชิก");
        return;
    }
    
    const errorAlert = document.getElementById("auth-error-msg");
    errorAlert.style.display = "none";
    
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        await auth.signInWithPopup(provider);
        showToast("เข้าสู่ระบบด้วย Google สำเร็จ!");
        closeAuthModal();
    } catch (err) {
        console.error("Google login failed:", err);
        errorAlert.textContent = err.message + " (หากรันบนเว็บบนระบบจริง โปรดเช็คว่าได้แอดโดเมนนี้ใน Authorized Domains ของ Firebase Console หรือยัง)";
        errorAlert.style.display = "block";
    }
}

// Sign Up / Sign In handle
async function handleAuthFormSubmit() {
    if (!cloudMode) {
        alert("โปรดคลิก Setup API เพื่อตั้งค่าเชื่อมต่อ Firebase ก่อนใช้งานระบบสมาชิก");
        return;
    }
    
    const email = document.getElementById("auth-email").value.trim();
    const password = document.getElementById("auth-password").value.trim();
    const confirmPassword = document.getElementById("auth-confirm-password").value.trim();
    const errorAlert = document.getElementById("auth-error-msg");
    
    errorAlert.style.display = "none";
    
    try {
        if (isRegisterMode) {
            // Register
            if (password !== confirmPassword) {
                throw new Error("รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน");
            }
            await auth.createUserWithEmailAndPassword(email, password);
            showToast("สมัครสมาชิกใหม่สำเร็จ!");
        } else {
            // Login
            await auth.signInWithEmailAndPassword(email, password);
            showToast("เข้าสู่ระบบเรียบร้อยแล้ว");
        }
        closeAuthModal();
    } catch (err) {
        errorAlert.textContent = err.message;
        errorAlert.style.display = "block";
    }
}

// --- Setup Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Cloud backend if credentials configured
    initializeCloudBackend();
    
    // 2. Load Initial Default Preset (guaranteed to be different from the last loaded one)
    const keys = Object.keys(PRESETS);
    const lastKey = localStorage.getItem("lastStoryboardPreset");
    const availableKeys = keys.filter(k => k !== lastKey);
    const finalKeys = availableKeys.length > 0 ? availableKeys : keys;
    const randomKey = finalKeys[Math.floor(Math.random() * finalKeys.length)];
    loadPreset(randomKey);
    
    // 3. Generate Button (Runs Gemini AI if configured, else fallbacks to template synthesizer)
    document.getElementById("btn-generate").addEventListener("click", () => {
        const title = document.getElementById("story-title").value;
        if (title.trim()) {
            const creds = window.ConfigManager.getCredentials();
            if (creds && creds.geminiApiKey) {
                generateStoryboardWithGemini(title);
            } else {
                // Synthesize local template fallback
                const titleLower = title.toLowerCase();
                const matchedPreset = Object.keys(PRESETS).find(k => titleLower.includes(k) || titleLower.includes(PRESETS[k].titleTh.toLowerCase()));
                if (matchedPreset) {
                    loadPreset(matchedPreset);
                    showToast("โหลดสตอรี่บอร์ดสำหรับ '" + title + "' สำเร็จ!");
                } else {
                    // Alert that actual AI generation requires API key setup
                    alert("💡 เคล็ดลับ: คุณกำลังทำงานในโหมดตัวอย่าง (Offline Demo)\nหากต้องการใช้งานปัญญาประดิษฐ์ AI เจนสตอรี่บอร์ดจริงจาก Gemini โปรดตั้งค่า Setup API ด้านขวาบนก่อนนะครับ!");
                    showToast("⚠️ ไม่พบคีย์ Gemini API Key");
                    openConfigModal();
                }
            }
        }
    });

    // Enter Key on Title Input
    document.getElementById("story-title").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            document.getElementById("btn-generate").click();
        }
    });
    
    // 4. Preset Chips
    document.querySelectorAll(".preset-chips .chip").forEach(chip => {
        chip.addEventListener("click", () => {
            document.querySelectorAll(".preset-chips .chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            
            const presetKey = chip.getAttribute("data-preset");
            loadPreset(presetKey);
            showToast("โหลดสตอรี่บอร์ดแม่แบบสำเร็จ!");
        });
    });
    
    // 5. Drawer close and cancel
    document.getElementById("btn-close-drawer").addEventListener("click", closeEditDrawer);
    document.getElementById("btn-cancel-edit").addEventListener("click", closeEditDrawer);
    document.getElementById("drawer-overlay").addEventListener("click", closeEditDrawer);
    
    // 6. Drawer save
    document.getElementById("btn-save-edit").addEventListener("click", savePanelEdits);
    
    // 7. Tabs switching
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            switchTab(tabId);
        });
    });
    
    // 8. Copy Buttons
    document.querySelectorAll(".btn-copy").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            copyToClipboard(targetId);
        });
    });
    
    // 9. Download SVG Button
    document.getElementById("btn-download-svg").addEventListener("click", () => {
        const svgContent = document.getElementById("svg-poster-container").innerHTML;
        const blob = new Blob([svgContent], {type: "image/svg+xml;charset=utf-8"});
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement("a");
        link.href = url;
        link.download = `storyboard_${currentState.titleEn.toLowerCase().replace(/\s+/g, '_')}_poster.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        showToast("เริ่มดาวน์โหลดไฟล์โปสเตอร์ SVG แล้ว!");
    });
    
    // 10. Step 3 Action Buttons
    document.getElementById("btn-step3-yes").addEventListener("click", () => {
        copyToClipboard("poster-prompt-text");
        document.getElementById("guide-modal").classList.add("open");
    });
    
    document.getElementById("btn-step3-no").addEventListener("click", () => {
        document.getElementById("guide-modal").classList.add("open");
    });
    
    // 11. Guide Modal Close
    document.querySelectorAll("#btn-close-modal, #modal-overlay, #btn-close-modal-ok").forEach(el => {
        el.addEventListener("click", () => {
            document.getElementById("guide-modal").classList.remove("open");
        });
    });

    // 12. Config Credentials Modal binds
    document.getElementById("btn-config-settings").addEventListener("click", openConfigModal);
    document.getElementById("btn-close-config").addEventListener("click", closeConfigModal);
    document.getElementById("btn-cancel-config").addEventListener("click", closeConfigModal);
    document.getElementById("config-modal-overlay").addEventListener("click", closeConfigModal);
    document.getElementById("btn-save-config").addEventListener("click", saveConfigCredentials);

    // 13. Auth Modal binds
    document.getElementById("btn-close-auth").addEventListener("click", closeAuthModal);
    document.getElementById("auth-modal-overlay").addEventListener("click", closeAuthModal);
    document.getElementById("link-toggle-auth").addEventListener("click", (e) => {
        e.preventDefault();
        toggleAuthMode();
    });
    document.getElementById("auth-form").addEventListener("submit", handleAuthFormSubmit);
    document.getElementById("btn-google-auth").addEventListener("click", handleGoogleSignIn);
    
    // 14. Admin refresh users
    document.getElementById("btn-refresh-users").addEventListener("click", () => {
        loadAdminUserPanel();
        showToast("รีเฟรชบัญชีผู้ใช้งานสำเร็จ");
    });
});
