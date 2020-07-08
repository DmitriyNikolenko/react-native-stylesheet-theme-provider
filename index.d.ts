declare module 'react-native-stylesheet-theme-provider' {
    import React from "react";
    import { StyleSheet } from 'react-native'

    type RNStyleSheet = StyleSheet.NamedStyles<any>
    export type TTheme = Record<string, string | number>
    export type TThemeMap = Record<string, TTheme>
    export interface IThemeContext {
        theme: TTheme
        setTheme: React.Dispatch<keyof TThemeMap>
        themeValues: TThemeMap[keyof TThemeMap]
        regExp: RegExp
    }
    export interface IThemeProvider {
        themeMap: TThemeMap
        defaultThemeName: keyof TThemeMap
        regExp?: RegExp
    }
    export interface IUseStyles {
        (stylesheet: RNStyleSheet): RNStyleSheet
    }

    const AxiosContext: React.Context<IThemeContext>
	export const ThemeProvider: React.FC<IThemeProvider>
	export const useStyles: IUseStyles
	export const useTheme: () => Pick<IThemeContext, 'theme' | 'setTheme' | 'themeValues'>
}
