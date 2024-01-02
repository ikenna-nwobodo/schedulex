/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url(./assets/images/login.png)",
        main: "url(./assets/images/main.png)",
        min: "url(./assets/images/min.png)",
        mobile: "url(./assets/images/mobile.png)",
      },
    },
  },
  plugins: [],
};
