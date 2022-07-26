/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.vue', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: { screens: { xs: '22rem' } },
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class',
};
