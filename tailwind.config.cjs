const config = {

  content: ['./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

  darkMode: 'class',

  theme: {
    extend: {
      "colors": {
        "accent": {
          50: "#FCF1ED",
          100: "#FAE3DC",
          200: "#F4C6B8",
          300: "#EFAA95",
          400: "#EA8D71",
          500: "#E46F4C",
          600: "#D54A20",
          700: "#A03818",
          800: "#6A2510",
          900: "#351308"
        }
      }
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    ...require("@skeletonlabs/skeleton/tailwind/skeleton.cjs")()],

};

module.exports = config;
