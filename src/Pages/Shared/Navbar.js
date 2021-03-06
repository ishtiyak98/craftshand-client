import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import { GiEclipseSaw } from 'react-icons/gi';
import Avatar from "../../Assets/Avatar/av3.png"

const Navbar = () => {
  const [user] = useAuthState(auth);

  console.log(user);
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
          !user && <li className="w-max"><NavLink to={"/login"}>Login</NavLink> </li>
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
        <div className="flex items-center">
            <label htmlFor="my-drawer-2" className="btn btn-primary text-white drawer-button lg:hidden">Dashboard</label>
            {
            user && <div class="dropdown dropdown-end text-primary ml-4">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                {
                  user.photoURL ? <img src={user.photoURL} alt=""/> : <img src={Avatar} alt=""/>
                }
                
              </div>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-44">
              <div className="bg-primary text-white py-4 px-2">
                {
                   user &&  
                    <div className="text-sm">
                      <span className="font-bold">{user.displayName}</span>
                    </div>
                }
              </div>
              <li className="py-1">
                  {
                    user && <Link to={"/dashboard/profile"} >My Profile</Link>
                  }
              </li>
              <li className="py-1">
                {
                  user && <Link to={"/dashboard"}>My Dashboard</Link>
                }
              </li>
              <li className="py-1">
                {
                  user ? <NavLink to={"/login"} onClick={handleSignOut}>Logout</NavLink> : <NavLink to={"/login"}>Login</NavLink>
                }
              </li>
            </ul>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
