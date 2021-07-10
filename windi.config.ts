import { defineConfig } from "windicss/helpers";
import defaultTheme from "tailwindcss/defaultTheme";

export default defineConfig({
	darkMode: "class", // or 'media'
	theme:    {
		extend: {
			width: {
				xxs: "16rem"
			},
			height: {
				xxs: "16rem"
			}
		},
		fontFamily: {
			sans: ["Roboto", ...defaultTheme.fontFamily.sans]
		}
	},
	plugins:  [
		require("windicss/plugin/filters"),
		require("windicss/plugin/forms"),
		require("windicss/plugin/aspect-ratio"),
		require("windicss/plugin/line-clamp"),
		require("windicss/plugin/typography"),
		require("windicss/plugin/scroll-snap")
	]
});

