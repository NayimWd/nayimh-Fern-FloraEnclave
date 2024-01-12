/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.css"],
	theme: {
		screens: {
			xsm: "420px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1320px",
			xxl: "1536px",
		},
		container: {
			center: true,
			padding: {
				default: "30px",
			},
		},

		extend: {
			fontFamily: {
				reem: ["Reem Kufi", "sans-serif"],
				sans: ["Nunito Sans", "sans-serif"],
				lato: ["Lato", "sans-serif"],
				jost: ["Jost", "sans-serif"],
			},
			colors: {
				creamy_white: "#F9F5F0",
				white_clr: "#FFFFFF",
				light_gray: "#F3F3F3",
				dark_gray: "#333333",
				subtle_gray: "#A0AB84",
				border_clr: "#E0E0E0",
				dark_green: "#145333",
				darker_green: "#0B3223",
				bg_green: "#004F44",
				green: "#4CAF50",
				soft_green: "#6BBB6D",
				warm_tupe: "#BFB5A2",
				light_red: "#FFCDD2",
				dark_red: "#D32F2F",
				blue: "#1976D2",
				yellow: "#FFD54F",
			},
			backgroundImage: {
				heroBg: "url('./src/assets/image/s6.webp')",
				bannerBg: "url('./src/assets/image/psBanner.jpg')",
				banner: "url('./src/assets/image/productBanner.webp')",
				loginBg: "url('./src/assets/image/psformbg.jpg')",
				logBg: "url('./src/assets/image/logimg.png')",
			},
		},
	},
	plugins: [],
};


