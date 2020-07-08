import React from "react"
import ThemeContext from "./ThemeContext"

export default function useTheme(stylesheet) {
	const { theme, setTheme } = React.useContext(ThemeContext)
	return [theme, setTheme]
}
