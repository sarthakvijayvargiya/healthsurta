/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/get-all-doctors",
        {},
        { headers: { aToken } }
      );
      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeAvailablity = async (docId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin//change-availability",
        { docId },
        { headers: { aToken } }
      );

      if(data.success){
        toast.success(data.message);
        getAllDoctors();
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getAllAppointments = async()=>{
    try {
      const {data} = await axios.get(backendUrl+'/api/admin/appointments',{headers:{aToken}});

      if(data.success){
        setAppointments(data.appointments);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const value = {
    aToken,
    setAToken,
    backendUrl,
    getAllDoctors,
    doctors,
    changeAvailablity,
    getAllAppointments,
    appointments,setAppointments
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
