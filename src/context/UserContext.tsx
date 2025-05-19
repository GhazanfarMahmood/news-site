"use client";

import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children})  => {
    return (
        <UserContext.Provider value={""}>
            {children}
        </UserContext.Provider>
    );
};

export const userValue = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider");
    };
    return context;
};

export default UserContext;