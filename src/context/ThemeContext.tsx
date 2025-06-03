"use client";

import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { Props, Theme, ThemeContextType } from "@/types/user";

//Todo: in typescript you can define the type of createContext with the help of generics and also pass the undefined when we call the createContext() like: createContext(null)
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
    //todo: this is used to check the loading state
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        //! first of all savedTheme a variable that will get the value from local storage, if the value is present than it will save dark or light mode value into savedTheme if not than it doesn't save any type of value into savedTheme
        const savedTheme = localStorage.getItem("theme") as Theme | null;

        // Step 1: Use saved theme if available
        // check the value if dark value is present than it will pass as an argument to both function setIsDark() or applyTheme()
        if (savedTheme === "dark" || savedTheme === "light") {
            setIsDark(savedTheme);
            //! here we call applyTheme function and pass it an argument that is savedTheme  
            applyTheme(savedTheme);
        } else {
        // Step 2: Otherwise use system preference
        // !else it will check the prefersDark color as the value dark or light base on the userSystem will pass into the both function setIsDark or applyTheme
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const systemTheme: Theme = prefersDark ? "dark" : "light";
            setIsDark(systemTheme);
            applyTheme(systemTheme);
        }

        // We initially set isLoaded to false to delay rendering of children.
        // This prevents the UI from rendering before the correct theme is applied to the <html> tag.
        // After applying the theme in useEffect, we set isLoaded to true to allow the app to render correctly with the applied theme.
        setIsLoaded(true);
    }, []);

    //! applyTheme is the function that we use to apply the class of dark-mode or light-mode to html tag by default it will take only one parameter. if theme is equal to dark than it will apply dark-mode class and remove light-mode class else it will remove the dark-mode class and add light-mode class
    const applyTheme = (theme: Theme) => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
            document.documentElement.classList.add("light-mode");
        }
    };

    //! below is the function that is used to set value to localstorage
    const toggleTheme = () => {
        // it will first check the prefers color of the user system
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        // if the prefers color of user system is dark than it will store dark color in systemTheme else it will store light in systemTheme
        const systemTheme: Theme = prefersDark ? "dark" : "light";

        let newTheme: Theme;

        // here will get the value from local storage if present
        const savedTheme = localStorage.getItem("theme") as Theme | null;
 
        // If no saved theme or value in local storage, toggle based on system than update the newTheme and store value inside it.
        if (!savedTheme) {
            newTheme = systemTheme === "dark" ? "light" : "dark";
        } else {
            newTheme = isDark === "dark" ? "light" : "dark";
        }

        setIsDark(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    // this is going to make the below content to stop or run on the base of condition if condition is true than it return null which block the below children to render and if the isLoaded is false than it doesn't return
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

