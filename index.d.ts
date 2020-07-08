declare module 'react-native-stylesheet-theme-provider' {
    import React from "react";
    import ReactNative from 'react-native'

    export type TTheme = Record<string, string | number>
    export type TThemeMap = Record<string, TTheme>
    export interface IThemeContext {
        theme: TTheme,
        setTheme: React.Dispatch<TTheme>,
        regExp: RegExp
    }
    export interface IThemeProvider {
        themeMap: TThemeMap
        defaultThemeName: keyof TThemeMap
        regExp?: RegExp
    }
    export interface IUseStyles {
        (stylesheet: ReactNative.StyleSheet): ReactNative.StyleSheet
    }

    const AxiosContext: React.Context<IThemeContext>
	export const ThemeProvider: React.FC<IThemeProvider>
	export const useStyles: IUseStyles
	export const useTheme: Pick<IThemeContext, 'theme' | 'setTheme'>
}
