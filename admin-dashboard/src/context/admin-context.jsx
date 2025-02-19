/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const value = {
    aToken,
    setAToken,
    backendUrl,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const adminContext = useContext(AdminContext);
  if (!adminContext) {
    throw new Error("App Please provide valid");
  }
  return adminContext;
};
