import React from "react"
import ThemeContext from "./ThemeContext"

export default function useTheme() {
	const { themeValues, theme, setTheme } = React.useContext(ThemeContext)
	return { themeValues, theme, setTheme }
}
