/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07080C",
        navy: "#070B16",
        gold: "#C9A86A",
        fog: "rgba(255,255,255,0.08)"
      }
    }
  },
  plugins: []
};
