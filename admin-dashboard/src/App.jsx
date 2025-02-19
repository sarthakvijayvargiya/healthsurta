import Navbar from "./components/nav-bar";
import { useAdminContext } from "./context/admin-context";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";

function App() {
  const { aToken } = useAdminContext();
  return aToken ? (
    <>
      <div className="bg-[#F8F9FD]">
        <ToastContainer />
        <Navbar />
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
