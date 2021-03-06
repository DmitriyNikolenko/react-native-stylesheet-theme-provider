import React from "react"
import {
	AppRegistry,
	SafeAreaView,
	TouchableWithoutFeedback,
	Text,
	StyleSheet,
} from "react-native"
import { initTheme } from "../src/index"

const themeMap = {
	green: {
		primaryColor: "#CDDC39",
		textColor: "#F0F4C3",
	},
	amber: {
		primaryColor: "#FFC107",
		textColor: "#FFECB3",
	},
}
const { ThemeProvider, useStyles, useTheme } = initTheme({
	themeMap,
	defaultThemeName: "green",
})

const stylesheet = StyleSheet.create({
	button: {
		padding: 16,
		backgroundColor: "var(--primaryColor)",
	},
	buttonLabel: {
		color: "var(--secondaryColor)",
	},
})

function Button({ children: label }) {
	const styles = useStyles(stylesheet)
	const { setTheme } = useTheme()

	return (
		<TouchableWithoutFeedback
			style={styles.primaryColor}
			onPress={() =>
				setTheme((theme) => (theme === "green" ? "amber" : "green"))
			}
		>
			<Text style={styles.textColor}>{label}</Text>
		</TouchableWithoutFeedback>
	)
}

function Example() {
	return (
		<ThemeProvider>
			<SafeAreaView>
				<Button>Hello</Button>
			</SafeAreaView>
		</ThemeProvider>
	)
}

AppRegistry.registerComponent("Example", () => Example)
