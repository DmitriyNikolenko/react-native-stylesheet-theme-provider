# About

Use dynamic theme changing with react native stylesheets.

# Features

-   can substitute values instead of variables
-   can use any regular expression to detect variables
-   can change themes dynamically
-   can be used with react-native-css-modules
-   have typescript typings

# How to establish

## Step 1. Create

```jsx
import { initTheme } from 'react-native-stylesheet-theme-provider'

const { ThemeProvider, useStyles, useTheme } = initTheme({
    themeMap: {
		green: { primaryColor: "#CDDC39", textColor: "#F0F4C3" },
		amber: { primaryColor: "#FFC107", textColor: "#FFECB3" },
	},
    defaultThemeName: "green".
    // regExp = /^var\((.*?)\)$/ // CSS custom properties format by default. Example: "color: var(--customProp)"
})
```

## Step 2. Wrap App to ThemeProvider

```jsx
<ThemeProvider>
	<SafeAreaView>
		<Button>Hello</Button>
	</SafeAreaView>
</ThemeProvider>
```

# How to use

## useStyles

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
const styles = useStyles(stylesheet)
```

## useTheme

```jsx
const { themeValues, theme, setTheme } = useTheme()
// themeValues - set of values for current theme
// theme - current theme name
// setTheme - set current theme name with value or function returns value
```

# Typescript

You can pass types for theme map and union with theme names in order to make typings for all handlers.

```tsx
import { initTheme } from 'react-native-stylesheet-theme-provider'

const { ThemeProvider, useStyles, useTheme } = initTheme<{ primaryColor: string, textColor: string, }, 'green' | 'amber'>({
    themeMap: {
		green: { primaryColor: "#CDDC39", textColor: "#F0F4C3" },
		amber: { primaryColor: "#FFC107", textColor: "#FFECB3" },
	},
    defaultThemeName: "green".
    // regExp = /^var\((.*?)\)$/ // CSS custom properties format by default. Example: "color: var(--customProp)"
})
```

# Examples

You can get acquainted with an examples in example directory.
