import React from "react"

// type for children of themeProvider 
export type Props = {
    children : React.ReactNode
}

// Define a type for useState using a union of string literals.
// This restricts the theme value to only "light" or "dark", giving us better type safety and control.
export type Theme = "light" | "dark";

// Define the shape of the context value for ThemeContext.
// - `isDark`: stores the current theme, either "light" or "dark".
// - `toggleTheme`: a function that toggles the theme; it returns nothing (void).
export interface ThemeContextType {
    isDark: Theme;
    toggleTheme: () => void;
}
