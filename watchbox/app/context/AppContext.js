"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [expanded, setExpanded] = useState(false);
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [startSearch, setStartSearch] = useState(false);

  const search = async (q) => {
    const data = await fetch(`/api/youtube?type=search&query=${q}`);
    const result = await data.json();
    return result;
  };

  return (
    <AppContext.Provider
      value={{
        expanded,
        setExpanded,
        category,
        setCategory,
        searchValue,
        setSearchValue,
        startSearch,
        setStartSearch,
        search,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
