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

export interface DataType {
    author : string | null,
    title : string,
    description : string,
    url : string,
    urlToImage : string | null,
    publishedAt : string,
}

export interface FullArticle {
    source : {
        id : string | null,
        name : string,
    },
     author : string | null,
    title : string,
    description : string,
    url : string,
    urlToImage : string | null,
    publishedAt : string,
    content : string,
}

// first, we define the properties of all object in an array than we assign that object property to an array because array consist of data which is in the form of object that is coming from an API. 
export type ArrayProps = FullArticle[];
