import React from "react"

const ThemeContext = React.createContext({
	theme: "default",
	setTheme: (theme) => null,
	themeValues: {},
	regExp: new RegExp(""),
})

export default ThemeContext
