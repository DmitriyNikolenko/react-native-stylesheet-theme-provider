import React from "react"
import ThemeContext from "./ThemeContext"

const defaultRegExp = /^var\(--(.*?)\)$/ // CSS custom properties format. Example: "color: var(--customProp)"

const ThemeProvider = ({
	children,
	themeMap,
	defaultThemeName = "default",
	regExp = defaultRegExp,
}) => {
	const defaultTheme = themeMap[defaultThemeName]
	const [theme, setTheme] = React.useState(defaultTheme)

	return (
		<ThemeContext.Provider
			value={{ themeValues: themeMap[theme], theme, setTheme, regExp }}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
