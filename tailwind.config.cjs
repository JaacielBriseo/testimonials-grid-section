/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	screens: {
		sm: '480px',
		md: '768px',
		lg: '976px',
		xl: '1440px',
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow Semi Condensed', 'sans-serif'],
			},
			colors: {
				moderateViolet: 'hsl(263, 55%, 52%)',
				verydarkGrayishblue: 'hsl(217, 19%, 35%)',
				verydarkBlackishblue: 'hsl(219, 29%, 14%)',
				white: 'hsl(0, 0%, 100%)',
				lightGray: 'hsl(0, 0%, 81%)',
				lightGrayishblue: 'hsl(210, 46%, 95%)',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
