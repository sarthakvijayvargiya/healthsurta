/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
const [doctors,setDoctors] = useState([]);
const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const getDoctorsData = async()=>{
  try {
    const {data} = await axios.get(backendUrl+"/api/doctor/list");

    if(data.success){
      setDoctors(data.doctors);
    }
  } catch (error) {
    toast.error(error.message);
    console.log(error);

  }
}

useEffect(()=>{
  getDoctorsData();
},[])

  const value = {
    doctors,
    token,
    setToken,backendUrl
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
