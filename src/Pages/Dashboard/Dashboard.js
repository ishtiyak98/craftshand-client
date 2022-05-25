import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <section>
      <Navbar></Navbar>

      <div className="drawer  drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* <!-- Page content here --> */}
          <h3 className="text-4xl text-center my-8 font-bold text-primary">
            My Dashboard
          </h3>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-72 bg-gray-100 text-base-content space-y-5">
            {/* <!-- Sidebar content here --> */}
            {!admin && (
              <>
                <li className="bg-gray-400 text-white rounded-lg shadow-lg">
                  <NavLink to={"orders"}>My Orders</NavLink>
                </li>
                <li className="bg-gray-400 text-white rounded-lg shadow-lg">
                  <NavLink to={"review"}>Add a Review</NavLink>
                </li>
                <li className="bg-gray-400 text-white rounded-lg shadow-lg">
                  <NavLink to={"profile"}>My profile</NavLink>
                </li>
              </>
            )}

            {admin && (
              <>
                <li className="bg-gray-400 text-white rounded-lg shadow-lg">
                  <NavLink to={"users"}>Manage Users</NavLink>
                </li>
                <li className="bg-gray-400 text-white rounded-lg shadow-lg">
                  <NavLink to={"manage-orders"}>Manage All Orders</NavLink>
                </li>
                <li className="bg-gray-400 text-white rounded-lg shadow-lg">
                  <NavLink to={"add-product"}>Add Product</NavLink>
                </li>
                <li className="bg-gray-400 text-white rounded-lg shadow-lg">
                  <NavLink to={"manage-product"}>Manage Products</NavLink>
                </li>
                <li className="bg-gray-400 text-white rounded-lg shadow-lg">
                  <NavLink to={"profile"}>My profile</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </section>
  );
};

export default Dashboard;
