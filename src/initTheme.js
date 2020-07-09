import React from "react"
import getThemeProvider from "./getThemeProvider"
import getUseStyles from "./getUseStyles"
import getUseTheme from "./getUseTheme"

const defaultRegExp = /var\(--(.*?)\)/ // CSS custom properties format. Example: "color: var(--customProp)"

export default function initTheme({
	themeMap,
	defaultThemeName,
	regExp = defaultRegExp,
}) {
	const ThemeContext = React.createContext({
		theme: defaultThemeName,
		setTheme: (theme) => null,
		themeValues: themeMap[defaultThemeName],
		regExp: regExp,
	})

	return {
		ThemeProvider: getThemeProvider({
			themeMap,
			defaultThemeName,
			regExp,
			Context: ThemeContext,
		}),
		useStyles: getUseStyles(ThemeContext),
		useTheme: getUseTheme(ThemeContext),
	}
}
