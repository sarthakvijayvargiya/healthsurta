import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-bar";
import Sidebar from "./components/sidebar";
import { useAdminContext } from "./context/admin-context";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/admin/dashboard";
import AllAppointment from "./pages/admin/all-appointment";
import Adddoctor from "./pages/admin/add-doctor";
import DoctorsList from "./pages/admin/doctors-list";

function App() {
  const { aToken } = useAdminContext();
  return aToken ? (
    <>
      <div className="bg-[#F8F9FD]">
        <ToastContainer />
        <Navbar />
        <div className="flex items-start">
          <Sidebar />
          <Routes>
            <Route path="/" element={<></>}></Route>
            <Route path="/admin-dashboard" element={<Dashboard />}></Route>
            <Route
              path="/all-appointments"
              element={<AllAppointment />}
            ></Route>
            <Route path="/add-doctor" element={<Adddoctor />}></Route>
            <Route path="/doctor-list" element={<DoctorsList />}></Route>
          </Routes>
        </div>
      </div>
    </>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
