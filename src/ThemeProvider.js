import React from "react"
import ThemeContext from "./ThemeContext"

const defaultRegExp = /^var\((.*?)\)$/ // CSS custom properties format. Example: "color: var(--customProp)"

const ThemeProvider = ({
	children,
	themeMap,
	defaultThemeName,
	regExp = defaultRegExp,
}) => {
	const defaultTheme =
		themeMap[defaultThemeName] || themeMap[Object.keys(themeMap)?.[0]]
	const [theme, setTheme] = React.useState(defaultTheme)

	return (
		<ThemeContext.Provider value={{ theme, setTheme, regExp }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
