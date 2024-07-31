const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                firaCode: ["Fira Code", "monospace"],
                cascadia: ["Cascadia Code", "monospace"],
            },
            colors: {
                customizedBg: "#011627",
                customizedBtnBg: "#FEA55F",
                customizedBtnBgGray: "#1C2B3A",
                blueGradient: "#3B82F6",
                greenGradient: "#43D9AD",
                orangeGradient: "#FEA55F",
                borderColor: "#1E2D3D",
                cardBg: "#011221",
                snakeBoardBg: "rgba(1, 22, 39, 0.84)",
                codeRed: "#E99287",
                codePink: "#C98BDF",
            },
            animation: {
                blob: "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(5px, -10px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-5px, 5px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
            backgroundImage: {
                gridBG: "url('./src/assets/gridBackground.png')",
                canvasBg:
                    "linear-gradient(150.26deg, rgba(23, 85, 83, 0.8) 1.7%, rgba(67, 217, 173, 0.1) 81.82%)",
            },
            boxShadow: {
                customInset: "inset 0px 2px 0px rgba(255, 255, 255, 0.3)",
                snakeBoardBoxShadow: "inset 1px 5px 11px rgba(2, 18, 27, 0.71)",
                inputFormBoxShadow: "0px 0px 0px 2px rgba(96, 123, 150, 0.3)",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
