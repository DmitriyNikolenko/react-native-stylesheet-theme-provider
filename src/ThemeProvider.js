import React from "react"
import ThemeContext from "./ThemeContext"

const defaultRegExp = /^var\(--(.*?)\)$/ // CSS custom properties format. Example: "color: var(--customProp)"

const ThemeProvider = ({
	children,
	themeMap,
	defaultThemeName = "default",
	regExp = defaultRegExp,
}) => {
	const [theme, setTheme] = React.useState(defaultThemeName)
	const themeValues = themeMap[theme] || {}

	return (
		<ThemeContext.Provider value={{ themeValues, theme, setTheme, regExp }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
