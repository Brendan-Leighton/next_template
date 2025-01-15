import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const blumine = {
	'50': '#e7ffff',
	'100': '#c2fffe',
	'200': '#8cfffd',
	'300': '#3dfffb',
	'400': '#00fffb',
	'500': '#00e5ff',
	'600': '#00b3e3',
	'700': '#008cb5',
	'800': '#006f90',
	'900': '#005572',
	'950': '#003c55',
}

const golden_dream = {
	'50': '#fdfbe9',
	'100': '#fbf7c6',
	'200': '#f9ec8f',
	'300': '#f4d846',
	'400': '#efc620',
	'500': '#e0ae12',
	'600': '#c1870d',
	'700': '#9a610e',
	'800': '#7f4d14',
	'900': '#6d3f16',
	'950': '#3f2009',
}

const electric_violet = {
	'50': '#fcf3ff',
	'100': '#f7e2ff',
	'200': '#f1cbff',
	'300': '#e6a2ff',
	'400': '#d767ff',
	'500': '#c92dff',
	'600': '#bb06ff',
	'700': '#a700f8',
	'800': '#9400d3',
	'900': '#7302a1',
	'950': '#51007b',
}

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'neutral': colors.zinc,
				'primary': blumine,
				'accent': golden_dream,
				'destructive': colors.red,
			},
			listStyleType: {
				circle: 'circle',
			}
		},
	},
	plugins: [],
} satisfies Config
