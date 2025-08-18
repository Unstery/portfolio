import theme from './src/theme/resources/theme.constants'

const { colors, fonts: fontFamily } = theme;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
      		colors,
      		fontFamily,
    	},
	},
	plugins: [require('@tailwindcss/typography')],
}
