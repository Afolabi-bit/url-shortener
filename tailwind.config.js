/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "327px",
				md: "720px",
				lg: "1108px",
				xl: "1140px",
				"2xl": "1320px",
			},
		},
		extend: {
			colors: {
				myPurple1: "#34313D",
				myPurple2: "#3A3054",
				myPurple3: "#4B3F6B",
				myGray1: "#9E9AA8",
				myGray2: "#EFF1F7",
				myCyan: "#2BD0D0",
				myRed: "#F46363",
				myBtnHover: "#9AE3E3",
			},
		},
	},
	plugins: [],
};
