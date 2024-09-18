/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        primary:"#009A74"
      },

      backgroundImage: {
        "hero-bg": "url('../img/hero-bg.png')",
        "project-bg": "url('../img/project-bg.png')",
        "section-bg": "url('../img/section-bg.png')",
      },
    },
  },
  plugins: [],
}

