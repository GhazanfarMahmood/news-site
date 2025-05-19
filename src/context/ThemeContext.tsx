"use client";

import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { Props, Theme, ThemeContextType } from "@/types/user";

//Todo: in typescript you can define the type of createContext with the help of generics and pass the null when we call the createContext() like: createContext(null)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//todo: in below function, we can define React.FC along with the children type by using React.ReactNode like :React.FC <{children : React.ReactNode}> 
//todo: or you can define the type externally and remove that React.FC like below
//! type Props = {
//!      children : React.ReactNode
//! }
// ! and other way of defining type of children is {children} : {children: React.ReactNode}
export  const ThemeProvider = ({children}: Props)  => {
    //todo: also we define the type of useState hook with help of type generics and by default it has one value that is light 
    const [isDark, setIsDark] = useState<Theme>("light");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;

        // Step 1: Use saved theme if available
        if (savedTheme === "dark" || savedTheme === "light") {
            setIsDark(savedTheme);
            applyTheme(savedTheme);
        } else {
        // Step 2: Otherwise use system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const systemTheme: Theme = prefersDark ? "dark" : "light";
            setIsDark(systemTheme);
            applyTheme(systemTheme);
        }

        setIsLoaded(true);
    }, []);

    const applyTheme = (theme: Theme) => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
            document.documentElement.classList.add("light-mode");
        }
    };

    const toggleTheme = () => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const systemTheme: Theme = prefersDark ? "dark" : "light";

        let newTheme: Theme;

        const savedTheme = localStorage.getItem("theme") as Theme | null;

        // If no saved theme, toggle based on system
        if (!savedTheme) {
            newTheme = systemTheme === "dark" ? "light" : "dark";
        } else {
            newTheme = isDark === "dark" ? "light" : "dark";
        }

        setIsDark(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    if (!isLoaded) return null;
    
    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

//* Create a custom hook to access ThemeContext, so we don't need to import both useContext and ThemeContext separately in other files.
//* The return type is ThemeContextType, same as used in createContext, because the hook returns the context value (isDark and toggleTheme).
//* Also includes an error check to ensure the hook is only used inside ThemeProvider.
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    };
    return context;
};

export default ThemeContext;

