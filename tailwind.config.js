/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1E90FF",
                secondary: "#835FA1",
                tertiary: "#F7F7F7",
            },
        },
    },
    plugins: [],
};