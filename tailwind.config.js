/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"], // Ensure fonts with spaces have " " surrounding it.
        raleway: ["Raleway", "serif"], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
};
