/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

export const DoctorContext = createContext();

export const DoctorContextProvider = ({ children }) => {
  const value = {};

  return (
    <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
  );
};

export const useDoctorContext = () => {
  const doctorContext = useContext(DoctorContext);
  if (!doctorContext) {
    throw new Error("App Please provide valid");
  }
  return doctorContext;
};
