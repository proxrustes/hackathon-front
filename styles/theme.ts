"use client"

import { PaletteOptions, createTheme } from "@mui/material/styles";

export const BASE_PALETTE = {
    mode: "light",
    primary: {
        main: "#7E7F9A",
        light: "#F9F8F8"
    },
    secondary: {
        main: "#EB9486"
    },
    text: {
        primary: "#272838"
    },
    success: {
        main: "#66bb6a",
        contrastText: "#fff"
    },
    error: {
        main: "#d32f2f",
        contrastText: "#fff"
    },
    warning: {
        main: "#ffa726",
        contrastText: "#fff"
    }
} as PaletteOptions

const commonThemeOptions = {
    typography: {
        fontFamily: "Optima nova LT"
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1465
        }
    }
}

export const lightTheme = createTheme({
    palette: BASE_PALETTE,
    ...commonThemeOptions
})