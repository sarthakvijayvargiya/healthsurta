import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyAppointment = () => {

  const {backendUrl ,token} = useAppContext();

  const [appointments,setAppointments] = useState([]);

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const slotDateFormat = (slotDate)=>{
    const dateArray = slotDate.split('_');
    return dateArray[0]+" "+months[Number(dateArray[1])-1]+" "+dateArray[2];
  }
  const getUserAppointments = async ()=>{
    try {
      const {data} = await axios.get(backendUrl+'/api/user/appointments',{headers:{token}});

      if(data.success){
        setAppointments(data.appointments.reverse());
        console.log(data.appointments.reverse())
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    if(token){
      getUserAppointments();
    }
  },[token])

// TODO from this component learn how maked a responsive component
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments</p>
      <div>
        {appointments &&
          appointments.slice(0,3).map((doctor,index)=>(
            <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
              <div>
                <img className="w-32 bg-indigo-50" src={doctor.docData.image} alt="doctors image" />
              </div>
              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">{doctor.docData.name}</p>
                <p>{doctor.docData.speciality}</p>
                <p className="text-zinc-700 font-medium mt-1">Address:</p>
                <p className="text-xs">{doctor.docData.address.line1}</p>
                <p className="text-xs">{doctor.docData.address?.line2}</p>
                <p className="text-xs mt-1"><span className="text-sm text-neutral-700 font-medium">Date & Time:</span>{slotDateFormat(doctor.slotDate)} | {doctor.slotTime}</p>
              </div>
              <div></div>
              <div className="flex flex-col gap-2 justify-end">
                <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">Pay Online</button>
                <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">Cancel Appointment</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointment