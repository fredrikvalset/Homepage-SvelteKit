/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				darkBlur: "#15339F",
				lightBlur: "#fff7d2",
				mainColorDark: "#03060D",
				mainColorLight: "#1282A0",
				cardDark: "#172A44",
				cardLight: "#084A5E"
			}
		}
	},
	plugins: []
};
