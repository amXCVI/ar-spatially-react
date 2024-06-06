/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                white: "#ffffff",
                white30: "#ffffff30",
                gray70: "#575959",
                gray90: "#2A2A2B",
                "gefault-bg": "#e2e2e2",
            },
            animation: {
                "spin-slow": "spin 15s linear infinite",
            },
        },
    },
    plugins: [],
};
