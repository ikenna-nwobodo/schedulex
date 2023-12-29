/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url(./assets/images/login.png)",
      },
    },
  },
  plugins: [],
};
