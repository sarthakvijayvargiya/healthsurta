/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const value = {};

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export const useAdminContext = () => {
  const adminContext = useContext(AdminContext);
  if (!adminContext) {
    throw new Error ("App Please provide valid");
  }
  return adminContext;
};
