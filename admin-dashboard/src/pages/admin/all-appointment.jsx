import { useEffect } from "react";
import { useAdminContext } from "../../context/admin-context"

const AllAppointment = () => {
  const {aToken, appointments , getAllAppointments} = useAdminContext();

  useEffect(()=>{
    if(aToken){
      getAllAppointments();
    }
  },[aToken])

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border rounded text-sm max">
        <div className="hidden sm:grid gird-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
      </div>
    </div>
  )
}

export default AllAppointment