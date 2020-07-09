declare module 'react-native-stylesheet-theme-provider' {
    import React from "react";
    import { StyleSheet } from 'react-native'

    type RNStyleSheet = StyleSheet.NamedStyles<any>

    export interface IUseStyles {
        <T extends RNStyleSheet>(stylesheet: T): T
    }
    export interface IUseTheme<ThemeMap, ThemeNames> {
        (): {
            theme: ThemeNames
            setTheme: (theme: ThemeNames | ((theme: ThemeNames) => ThemeNames)) => void
            themeValues: ThemeMap
        }
    }

    export const initTheme: <ThemeMap, ThemeNames extends string, >(themeConfig: {
        themeMap: Record<ThemeNames, ThemeMap>
        defaultThemeName: ThemeNames
        regExp?: RegExp
    }) => {
        ThemeProvider: React.FC<any>
        useStyles: IUseStyles
        useTheme: IUseTheme<ThemeMap, ThemeNames>
    }
}
