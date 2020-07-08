import React from "react"

const getThemeProvider = ({ themeMap, defaultThemeName, regExp, Context }) => ({
	children,
}) => {
	const [theme, setTheme] = React.useState(defaultThemeName)
	const themeValues = themeMap[theme] || {}

	return (
		<Context.Provider value={{ themeValues, theme, setTheme, regExp }}>
			{children}
		</Context.Provider>
	)
}

export default getThemeProvider
