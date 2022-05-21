import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
