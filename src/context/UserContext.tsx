"use client";

import { ArrayProps, Props } from "@/types/user";
import SiteData from "@/utils/siteData";
import React, { createContext, useContext } from "react";

const UserContext = createContext<ArrayProps | undefined>(undefined);

export const UserProvider = ({children}: Props)  => {
    const data = SiteData();
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export const UserValue = () : ArrayProps => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider");
    };
    return context;
};

export default UserContext;