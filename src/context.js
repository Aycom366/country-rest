import React, { useState, useContext } from "react";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <AppContext.Provider value={{ isDark }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
