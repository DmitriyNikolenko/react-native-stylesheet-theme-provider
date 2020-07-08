import React from "react"

const ThemeContext = React.createContext({
	theme: {},
	setTheme: (theme) => null,
	regExp: new RegExp(""),
})

export default ThemeContext
