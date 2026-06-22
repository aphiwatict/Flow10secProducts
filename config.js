// ==========================================================================
// Web App Configuration & API Credentials Manager (LocalStorage Sandboxed)
// ==========================================================================

const CONFIG_KEYS = {
    FIREBASE: "flow10s_firebase_config",
    GEMINI: "flow10s_gemini_api_key"
};

const ConfigManager = {
    // Encodes values slightly before writing to local storage (basic obfuscation against extensions)
    encode(str) {
        if (!str) return "";
        try {
            return btoa(encodeURIComponent(str));
        } catch(e) {
            return str;
        }
    },

    decode(str) {
        if (!str) return "";
        try {
            return decodeURIComponent(atob(str));
        } catch(e) {
            return str;
        }
    },

    // Check if configuration credentials exist
    hasCredentials() {
        const fb = localStorage.getItem(CONFIG_KEYS.FIREBASE);
        const gem = localStorage.getItem(CONFIG_KEYS.GEMINI);
        return !!(fb && gem);
    },

    // Load credentials from LocalStorage
    getCredentials() {
        const fbRaw = localStorage.getItem(CONFIG_KEYS.FIREBASE);
        const gemRaw = localStorage.getItem(CONFIG_KEYS.GEMINI);
        
        let firebaseConfig = null;
        let geminiApiKey = "";
        
        if (fbRaw) {
            try {
                firebaseConfig = JSON.parse(this.decode(fbRaw));
            } catch (e) {
                console.error("Error parsing Firebase configuration:", e);
            }
        }
        
        if (gemRaw) {
            geminiApiKey = this.decode(gemRaw);
        }
        
        return {
            firebaseConfig,
            geminiApiKey
        };
    },

    // Save credentials to LocalStorage
    saveCredentials(firebaseConfig, geminiApiKey) {
        if (!firebaseConfig || !geminiApiKey) {
            throw new Error("Missing Firebase Config or Gemini API Key");
        }
        
        const fbEncoded = this.encode(JSON.stringify(firebaseConfig));
        const gemEncoded = this.encode(geminiApiKey);
        
        localStorage.setItem(CONFIG_KEYS.FIREBASE, fbEncoded);
        localStorage.setItem(CONFIG_KEYS.GEMINI, gemEncoded);
    },

    // Remove credentials (Logout/Clear configuration)
    clearCredentials() {
        localStorage.removeItem(CONFIG_KEYS.FIREBASE);
        localStorage.removeItem(CONFIG_KEYS.GEMINI);
    }
};

// Expose globally for other scripts
window.ConfigManager = ConfigManager;
