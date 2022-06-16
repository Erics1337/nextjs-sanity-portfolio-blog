// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				header: ['Raleway', 'sans-serif'],
				body: ['Open Sans', 'sans-serif'],
			},

			// screens: {
			//     xs: "375px",
			//     ...defaultTheme.screens
			// },

			colors: {
				transparent: 'transparent',
				primary: '#1735fc',
				primaryHover: '#122AC9',
				primarySelected: '#6E81FF',
				secondary: '#252426',
				secondaryHover: '#252426',
				secondarySelected: '#252426',
				white: '#ffffff',
				black: '#000000',
				yellow: '#f9e71c',
				lila: '#e6e5ec',
				purple: '#8c7ae6',
				green: '#00b894',
				blue: '#00cec9',
				'gray-10': '#6c6b6d',
				'gray-20': '#7c7c7c',
				'gray-30': '#919091',
				'gray-40': '#929293',
				'gray-50': '#f4f3f8',
				'gray-60': '#edebf6',
				'gray-70': '#d8d8d8',
			},

			container: {
				center: true,
				padding: '1rem',
			},

			shadows: {
				default: '0 2px 18px rgba(0, 0, 0, 0.06)',
				md: '0 -3px 36px rgba(0, 0, 0, 0.12)',
			},
			backgroundColor: {
				'main-bg': '#FAFBFB',
				'main-dark-bg': '#20232A',
				'secondary-dark-bg': '#33373E',
				'light-gray': '#F7F7F7',
				'half-transparent': 'rgba(0, 0, 0, 0.5)',
			},
			spacing: {
				13: '3.25rem',
				15: '3.75rem',
				17: '4.25rem',
				18: '4.5rem',
				19: '4.75rem',
				42: '10.5rem',
				76: '19rem',
				84: '21rem',
				88: '22rem',
				92: '23rem',
				100: '25rem',
				104: '26rem',
				108: '27rem',
				112: '28rem',
				116: '29rem',
				120: '30rem',
				124: '31rem',
				128: '32rem',
				132: '33rem',
				136: '34rem',
				140: '35rem',
				144: '36rem',
				148: '37rem',
				152: '38rem',
				156: '39rem',
				160: '40rem',
				164: '41rem',
				168: '42rem',
				172: '43rem',
				176: '44rem',
				180: '45rem',
				184: '46rem',
				188: '47rem',
				190: '48rem',
				194: '49rem',
				200: '50rem',
				204: '51rem',
			},
			zIndex: {
				'-1': '-1',
			},
			inset: {
				'2/5': '40%',
			},
		},
	},
	variants: {
		// Allows to change width on hover
		width: ['responsive', 'hover', 'focus'],
		extend: {
			display: ['responsive', 'group-hover'],
		},
	},
	// plugins: [require("@tailwindcss/typography"), require(
	//     "@tailwindcss/forms"), require(
	//         "@tailwindcss/aspect-ratio"),]
}
