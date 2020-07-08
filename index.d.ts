declare module 'react-native-stylesheet-theme-provider' {
    import React from "react";
    import { StyleSheet } from 'react-native'

    type RNStyleSheet = StyleSheet.NamedStyles<any>

    export interface IUseStyles {
        (stylesheet: RNStyleSheet): RNStyleSheet
    }
    export interface IUseTheme<ThemeMap, ThemeNames> {
        (stylesheet: RNStyleSheet): {
            theme: ThemeNames
            setTheme: React.Dispatch<ThemeNames>
            themeValues: ThemeMap
        }
    }
    export interface IInitTheme<ThemeMap, ThemeNames> {
        (themeConfig: {
            themeMap: TThemeMap
            defaultThemeName: keyof TThemeMap
            regExp?: RegExp
        }): {
            ThemeProvider: React.FC<void>
            useStyles: IUseStyles
            useTheme: IUseTheme<ThemeMap, ThemeNames>
        }
    }

    export const initTheme: IInitTheme
}
