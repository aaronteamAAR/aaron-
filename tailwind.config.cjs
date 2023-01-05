module.exports = {
    content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: false,
        base: false,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
      },
  }