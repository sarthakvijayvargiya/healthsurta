/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const CURRENCY = '$';
  const calculateAge = (dob) =>{
    const today = new Date();
    const birthDate  = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  }

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const slotDateFormat = (slotDate)=>{
    const dateArray = slotDate.split('_');
    return dateArray[0]+" "+months[Number(dateArray[1])-1]+" "+dateArray[2];
  }

  const value = {calculateAge,slotDateFormat,CURRENCY};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error ("App Please provide valid");
  }
  return appContext;
};
