import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ic: {
                    // Dark theme for coffee/shadow presentation
                    bg: "#120E0D", // Very dark brown/black
                    "bg-secondary": "#1E1815", // Slightly lighter dark brown
                    coffee: "#4A3B32", // Mid brown
                    "coffee-light": "#7D6454", // Light brown
                    gold: "#D4AF37", // Gold accent
                    "gold-muted": "#A68624", // Muted gold
                    
                    // Typography
                    text: "#F5F2F0", // Off-white for readability
                    "text-secondary": "#C8B8AD", // Light muted brown/gray for secondary text
                    divider: "#3A2E28", // Subtle dark divider
                },
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "float-delayed": "float 6s ease-in-out 3s infinite",
                "pulse-soft": "pulse-soft 3s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-12px)" },
                },
                "pulse-soft": {
                    "0%, 100%": { opacity: "0.4" },
                    "50%": { opacity: "0.7" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
