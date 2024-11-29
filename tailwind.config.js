const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Path to your components and pages
    flowbite.content(), // Ensure Flowbite's content is included for its classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Ensure Flowbite plugin is included
  ],
};
