/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				softOrange: 'hsl(35, 77%, 62%)',
				lightVermillion: 'hsl(5, 85%, 63%)',
				offWhite: 'hsl(36, 100%, 99%)',
				silver: 'hsl(233, 8%, 79%)',
				gunmetal: 'hsl(236, 13%, 42%)',
				veryDarkBlue: 'hsl(240, 100%, 5%)',
			},
		},
	},
	plugins: [],
}
