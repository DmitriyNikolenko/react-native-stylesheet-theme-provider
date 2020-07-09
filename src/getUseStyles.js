import React from "react"
import deepMap from "deep-map-object"

const ThemeContext = (ThemeContext) => (stylesheet) => {
	const { themeValues, regExp } = React.useContext(ThemeContext)

	return deepMap((value) => {
		if (typeof value !== "string") return value
		return value.replace(regExp, (match, propertyName) =>
			propertyName in themeValues ? themeValues[propertyName] : value
		)
	})(stylesheet)
}

export default ThemeContext
