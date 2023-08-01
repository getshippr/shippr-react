/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./react/components/**/*.{js,jsx,ts,tsx}",
    "./react/**/*.{js,jsx,ts,tsx}",
    "./react/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./react/**/*.{js,jsx,ts,tsx}",
    "./react/**/**/*.{js,jsx,ts,tsx}",
  ],
};
