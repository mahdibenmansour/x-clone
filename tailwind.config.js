/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f8bbd0", // Light Pink
        secondary: "#1e40af", // Custom Blue
        accent: "#ff6347", // Tomato Red
      },
    },
  },
  plugins: [],
};
