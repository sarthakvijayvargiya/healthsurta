/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const value = {
    doctors,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
