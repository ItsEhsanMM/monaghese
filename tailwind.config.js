/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#f0f0f0",
        "color-secondary": "#2982DB",
        card: "#f9f9f9",
        "primary-100": "#D7F6FF",
        "primary-200": "#AFE8FF",
        "primary-300": "#88D7FF",
        "primary-400": "#6AC5FF",
        "primary-500": "#39A7FF",
        "primary-600": "#2982DB",
        "primary-700": "#1C61B7",
        "primary-800": "#124493",
        "primary-900": "#0A307A",
        "success-100": "#EAFDF1",
        "success-200": "#D6FBE8",
        "success-300": "#BFF5DD",
        "success-400": "#AAEBD5",
        "success-500": "#8DDFCB",
        "success-600": "#67BFB2",
        "success-700": "#47A09B",
        "success-800": "#2C7D81",
        "success-900": "#1B5F6B",
        "info-100": "#E7F8FF",
        "info-200": "#CFEEFF",
        "info-300": "#B7E2FF",
        "info-400": "#A5D7FF",
        "info-500": "#87C4FF",
        "info-600": "#6299DB",
        "info-700": "#4473B7",
        "info-800": "#2B5093",
        "info-900": "#19377A",
        "warning-100": "#FFF7CC",
        "warning-200": "#FFED99",
        "warning-300": "#FFE066",
        "warning-400": "#FFD33F",
        "warning-500": "#FFBF00",
        "warning-600": "#DB9E00",
        "warning-700": "#B77F00",
        "warning-800": "#936300",
        "warning-900": "#7A4E00",
        "danger-100": "#FFE1D9",
        "danger-200": "#FFBCB4",
        "danger-300": "#FF918E",
        "danger-400": "#FF727C",
        "danger-500": "#FF4463",
        "danger-600": "#DB315D",
        "danger-700": "#B72257",
        "danger-800": "#93154E",
        "danger-900": "#7A0D48",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
