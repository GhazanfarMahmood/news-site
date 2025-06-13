  "use client";

  import { ArrayProps, Props } from "@/types/user";
  import SiteData from "@/utils/siteData";
  import React, { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  query: string;
  setQuery: (val: string) => void;
  data: ArrayProps;
  sourceData: ArrayProps;
  initialLoading: boolean;
  queryLoading: boolean;
};

  const UserContext = createContext<ContextType | undefined>(undefined);

  export const UserProvider = ({ children }: Props) => {
    const [query, setQuery] = useState<string>("news");
    const [data, setData] = useState<ArrayProps>([]);
    const [sourceData, setSourceData] = useState<ArrayProps>([]);
    const [initialLoading, setInitialLoading] = useState<boolean>(true);
    const [queryLoading, setQueryLoading] = useState<boolean>(false);

    // Main content data
    useEffect(() => {
    const fetchInitialData = async () => {
      setInitialLoading(true);
      const result = await SiteData(query); // initial load using default query
      setData(result);
      setInitialLoading(false);
    };
    fetchInitialData();
  }, []);

    // Sidebar data (fixed source - e.g., BBC News)
   useEffect(() => {
    // Skip this effect on initial mount
    if (!initialLoading) {
      const fetchQueryData = async () => {
        setQueryLoading(true);
        const result = await SiteData(query);
        setData(result);
        setQueryLoading(false);
      };
      fetchQueryData();
    }
  }, [query]);

   useEffect(() => {
    const fetchSidebarData = async () => {
      const sourceResult = await SiteData("source");
      setSourceData(sourceResult);
    };
    fetchSidebarData();
  }, []);

    return (
      <UserContext.Provider value={{  query,
        setQuery,
        data,
        sourceData,
        initialLoading,
        queryLoading, }}>
        {children}
      </UserContext.Provider>
    );
  };

  export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useUser must be used within a UserProvider");
    }
    return context;
  };

  export default UserContext;
