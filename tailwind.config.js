/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors
                primary: {
                    DEFAULT: "#3FCF8E",
                    dark: "#16B674",
                    light: "#72E3AD",
                },

                // Grayscale
                gray: {
                    DEFAULT: "#525252",
                    muted: "#707070",
                    light: "#E5E7EB",
                    lighter: "#F3F4F6",

                },

                // Base Colors
                white: "#FFFFFF",
                black: "#171717",
            },
        },
    },
    plugins: [],
}

