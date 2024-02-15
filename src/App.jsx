import Home from "./pages/Home";
import Modal from "./components/Modal/Modal";
import { useGeneralContext } from "./store/GeneralProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./Router";

function App() {
  const generalCtx = useGeneralContext();
  return (
    <>
      <ToastContainer />
      <Router />;
    </>
  );
}

export default App;
