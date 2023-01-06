const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    colors: {
      'lightdark':'#666666'
    },
  },
    content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: true,
        base: false,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "black",
      },
      themes: ["black"],
  }