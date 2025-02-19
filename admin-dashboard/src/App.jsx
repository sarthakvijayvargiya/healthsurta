import { useAdminContext } from "./context/admin-context";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";

function App() {
  const { aToken } = useAdminContext();
  return aToken ? (
    <>
      <ToastContainer />
    </>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
