import React from "react"
import deepMap from "deep-map-object"

const ThemeContext = (ThemeContext) => (stylesheet) => {
	const { themeValues, regExp } = React.useContext(ThemeContext)

	return deepMap((value) => {
		const match = String(value).match(regExp)
		const newValue = Array.isArray(match)
			? themeValues[match[1]] || value
			: value
		return newValue
	})(stylesheet)
}

export default ThemeContext
