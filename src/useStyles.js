import React from "react"
import deepMap from "deep-map-object"
import ThemeContext from "./ThemeContext"

export default function useStyles(stylesheet) {
	const { theme, regExp } = React.useContext(ThemeContext)

	return deepMap((value) => {
		const match = String(value).match(regExp)
		const newValue = Array.isArray(match) ? theme[match[1]] : value
		return newValue
	})(stylesheet)
}
