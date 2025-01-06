import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Toggle from "./Toggle";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { handleSignOut, user } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const handleLogOut = () => {
    handleSignOut()
    .then(() => {
      navigate(location?.state? '/' : '/')
    })
    .catch((error) => console.log('error'))
  }
  
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
     
      <li>
        <NavLink to="/allReview">All Review</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myReview">My Review</NavLink>
        </li>
      )}
      {user && (
        <li>
        <NavLink to="/addReview">Add Review</NavLink>
      </li>
      )}

      {user && (
        <li>
          <NavLink to="/addWatchList">My WatchList</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl">Gamer</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end z-10">
        {user && user?.email ? (
          <div className="flex gap-1 items-center ">
            <a
              data-tooltip-id="tooltip-anchor-show"
              data-tooltip-content={user?.displayName || "User"}
              data-tooltip-delay-show={1000}
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  className="w-10 rounded-full"
                  
                />
              ) : (
                <FaUser className="w-10  rounded-full" />
              )}
            </a>
            <Tooltip id="tooltip-anchor-show" />

            
              {" "}
              <button onClick={handleLogOut} className="btn bg-gradient-to-r from-blue-700 to-purple-800 text-white">
                Log Out
              </button>
            
          </div>
        ) : (
          <Link to="/login">
            {" "}
            <button  className="btn bg-gradient-to-r from-blue-700 to-purple-800 text-white">
              Login{" "}
            </button>
          </Link>
        )}
        <Toggle></Toggle>
      </div>
    </div>
  );
};

export default Navbar;
