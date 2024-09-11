/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            manrope: ["manrope", "ui-sans-serif", "system-ui"],
            inter: ["inter", "manrope", "ui-sans-serif", "system-ui"],
        },
        extend: {
            colors: {
                white: "#ffffff",
                white5: "#ffffff05",
                white15: "#ffffff15",
                white30: "#ffffff30",
                white50: "#ffffff50",
                white60: "#ffffff60",
                gray20: "#c4c4c4",
                gray70: "#575959",
                gray90: "#2A2A2B",
                "eerie-black": "#1a1a1a",
                "gefault-bg": "#e2e2e2",
                "light-bg": "#EDEDED",
                "smoky-black-bg": "#0d0d0d",
                "smoky-black-bg20": "#0d0d0d20",
                "raisin-black": "#262626",
                "dark-gray": "#111111",
                "davy-grey": "#555555",
                "dark-bg": "#0F1010",
                "dark-charcoal": "#303032",
                "silver-sand": "#1c1c1e",
                dark30: "#0000004D",
                dark70: "#191919",
                "spanish-gray": "#9E9C9C",
                "quick-silver": "#a4a4a4",
                "charleston-green": "#2a2a2b",
                "american-silver": "#d1d1d1",
                "american-silver20": "#d1d1d120",
                "blue-accent": "#4BB2F2",
                "blue-link": "#366EF9",
            },
            animation: {
                "spin-slow": "spin 15s linear infinite",
                "running-line": "ticker 100s linear infinite",
            },
            dropShadow: {
                mapHeaderBg: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
            boxShadow: {
                "popup-shadow": "0px 0px 200px #000000, 0px 12px 28px rgba(0, 0, 0, 0.25)",
            },
            backgroundPosition: {
                "right-6": "center right 1rem",
            },
            backgroundImage: {
                "map-header-bg": "linear-gradient(180deg,#000000 42.71%,rgba(0,0,0,0) 100%)",
                "nft-viewer-desc-bg":
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), radial-gradient(181.9% 105.41% at 14.65% 19.7%, #B8D6F6 0%, #76B8FF 36.81%, #6C7D90 100%)",
                "start-section-text-gradient": "linear-gradient(99.41deg, #0071BD -12.47%, #00BDFF 110.44%)",
                "our-vision-secton-text-gradient": "linear-gradient(93.8deg, #4946A3 12.46%, #8583C4 87.54%)",
            },
            lineHeight: {
                12: "3rem",
            },
        },
        screens: {
            "3sm": "375px",
            "2sm": "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};

// max-sm	@media not all and (min-width: 640px) { ... }
// max-md	@media not all and (min-width: 768px) { ... }
// max-lg	@media not all and (min-width: 1024px) { ... }
// max-xl	@media not all and (min-width: 1280px) { ... }
// max-2xl	@media not all and (min-width: 1536px) { ... }
