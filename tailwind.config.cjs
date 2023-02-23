const config = {

  content: ['./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

  darkMode: 'class',

  theme: {
    extend: {
      "colors": {
        "accent": {
          50: "#F1FEF2",
          100: "#E7FDE9",
          200: "#CAFCCE",
          300: "#B2FAB8",
          400: "#9AF9A2",
          500: "#80F789",
          600: "#3AF34A",
          700: "#0DD31E",
          800: "#098B14",
          900: "#05480A"
        }
      }
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    ...require("@skeletonlabs/skeleton/tailwind/skeleton.cjs")()],

};

module.exports = config;
