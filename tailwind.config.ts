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
                eq: {
                    cream: "#FAFAF7",
                    "cream-deep": "#F3F4F0",
                    blue: "#2563EB",
                    teal: "#0D9488",
                    red: "#EF4444",
                    amber: "#F59E0B",
                    text: "#111827",
                    "text-secondary": "#6B7280",
                    divider: "#E5E7EB",
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
