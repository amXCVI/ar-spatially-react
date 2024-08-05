/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            manrope: ["manrope", "ui-sans-serif", "system-ui"],
        },
        extend: {
            colors: {
                white: "#ffffff",
                white30: "#ffffff30",
                white50: "#ffffff50",
                gray70: "#575959",
                gray90: "#2A2A2B",
                "gefault-bg": "#e2e2e2",
                "light-bg": "#EDEDED",
                "smoky-black-bg": "#0d0d0d",
                "dark-bg": "#0F1010",
                dark30: "#0000004D",
                dark70: "#191919",
                "spanish-gray": "#9E9C9C",
                "charleston-green": "#2a2a2b",
                "american-silver": "#d1d1d1",
                "american-silver20": "#d1d1d120",
                "blue-accent": "#4BB2F2",
                "blue-link": "#366EF9",
            },
            animation: {
                "spin-slow": "spin 15s linear infinite",
            },
            dropShadow: {
                mapHeaderBg: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
            backgroundPosition: {
                "right-6": "center right 1rem",
            },
            backgroundImage: {
                "map-header-bg": "linear-gradient(180deg,#000000 42.71%,rgba(0,0,0,0) 100%)",
                "nft-viewer-desc-bg": "linear-gradient(0deg,#000000 -20%,rgba(0,0,0,0) 100%)",
                "start-section-text-gradient": "linear-gradient(99.41deg, #0071BD -12.47%, #00BDFF 110.44%)",
            },
            lineHeight: {
                12: "3rem",
            },
        },
    },
    plugins: [],
};
