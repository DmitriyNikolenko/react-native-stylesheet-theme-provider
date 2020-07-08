# About

Use dynamic theme changing with react native stylesheets.

# Features

-   can substitute values instead of variables
-   can use any regular expression to detect variables
-   can change themes dynamically
-   can be used with react-native-css-modules
-   have typescript typings

# API

## ThemeProvider

```jsx
<ThemeProvider
	themeMap={{
		green: { primaryColor: "#CDDC39", textColor: "#F0F4C3" },
		amber: { primaryColor: "#FFC107", textColor: "#FFECB3" },
	}}
	defaultThemeName="green"
	// regExp = /^var\((.*?)\)$/ // CSS custom properties format by default. Example: "color: var(--customProp)"
>
	<SafeAreaView>
		<Button>Hello</Button>
	</SafeAreaView>
</ThemeProvider>
```

## useStyles

```jsx
const styles = useStyles(stylesheet)
```

## useTheme

```jsx
const [theme, setTheme] = useTheme(stylesheet)
```

# Example

You can get acquainted with an examples in example directory.

```jsx
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
```
