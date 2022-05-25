import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "./firebase.init";
import useAdmin from "./Hooks/useAdmin";
import Blogs from "./Pages/Blogs/Blogs";
import AddProduct from "./Pages/Dashboard/Admin/AddProduct";
import AllUsers from "./Pages/Dashboard/Admin/AllUsers";
import ManageOrders from "./Pages/Dashboard/Admin/ManageOrders";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyReview from "./Pages/Dashboard/MyReview";
import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/LogIn/SignUp";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Purchase from "./Pages/Purchase/Purchase";
import AdminProtected from "./Pages/Shared/AdminProtected";
import ProtectedRoute from "./Pages/Shared/ProtectedRoute";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route
          path="/purchase/:_id"
          element={
            <ProtectedRoute>
              <Purchase></Purchase>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard></Dashboard>
            </ProtectedRoute>
          }
        >
          
          {
            admin ? <Route index element={<AdminProtected><AllUsers></AllUsers></AdminProtected>}></Route> : <Route index element={<MyOrders></MyOrders>}></Route>
          }
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route
            path="users"
            element={
              <AdminProtected>
                <AllUsers></AllUsers>
              </AdminProtected>
            }
          ></Route>
          <Route
            path="manage-orders"
            element={
              <AdminProtected>
                <ManageOrders></ManageOrders>
              </AdminProtected>
            }
          ></Route>
          <Route
            path="add-product"
            element={
              <AdminProtected>
                <AddProduct></AddProduct>
              </AdminProtected>
            }
          ></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
