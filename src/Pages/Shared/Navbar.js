import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import { GiEclipseSaw } from 'react-icons/gi';

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = ()=>{
    Swal.fire({
      title: "Logged Out!",
      text: "Successfully logged Out",
      icon: "success",
    });
    signOut(auth);
  }


  const navItem = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
      <li className="w-max">
        <NavLink to={"/portfolio"}>My Portfolio</NavLink>
      </li>
        {
          user &&<li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
        }
        {
          user && <li className="w-max"><NavLink to={"/dashboard/profile"} >{user.displayName}</NavLink></li>
        }
        {
          user ? <li><NavLink to={"/login"} onClick={handleSignOut}>Logout</NavLink></li> : <li><NavLink to={"/login"}>Login</NavLink></li>
        }
    
    </>
  );

  return (
    <div className="navbar bg-primary text-white lg:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to={"/"} className="normal-case text-2xl font-semibold">
          <div className="flex items-center">
            <GiEclipseSaw size={"1.4em"}/>
            <div className="ml-1">CraftsHand</div>
          </div>
        </Link>
      </div>
      <div className="navbar-end ">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4">
            {navItem}
          </ul>
        </div>
        <div className="">
            <label htmlFor="my-drawer-2" className="btn btn-primary text-white drawer-button lg:hidden">Dashboard</label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
