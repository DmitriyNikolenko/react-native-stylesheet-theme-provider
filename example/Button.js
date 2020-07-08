import React from "react"
import {
	AppRegistry,
	SafeAreaView,
	TouchableWithoutFeedback,
	Text,
	StyleSheet,
} from "react-native"
import { ThemeProvider, useStyles, useTheme } from "../src/index"

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
	const [theme, setTheme] = useTheme(stylesheet)

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

function Example() {
	return (
		<ThemeProvider themeMap={themeMap} defaultThemeName="green">
			<SafeAreaView>
				<Button>Hello</Button>
			</SafeAreaView>
		</ThemeProvider>
	)
}

AppRegistry.registerComponent("Example", () => Example)
