import React from "react"

const getThemeProvider = ({ themeMap, defaultThemeName, regExp, Context }) => ({
	children,
	themeName = defaultThemeName,
}) => {
	const [theme, setTheme] = React.useState(themeName)
	const themeValues = themeMap[theme] || {}

	return (
		<Context.Provider value={{ themeValues, theme, setTheme, regExp }}>
			{children}
		</Context.Provider>
	)
}

export default getThemeProvider
