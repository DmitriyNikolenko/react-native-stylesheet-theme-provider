import React from "react"

const getUseTheme = (ThemeContext) => () => {
	const { themeValues, theme, setTheme } = React.useContext(ThemeContext)
	return { themeValues, theme, setTheme }
}

export default getUseTheme
