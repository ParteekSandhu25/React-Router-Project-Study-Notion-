import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
import { FiMenu } from "react-icons/fi";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img
          src={logo}
          alt="studyNotion"
          width={160}
          height={32}
          loading="lazy"
        />
      </Link>

      <nav>
        <ul className="md:flex gap-x-6 text-white hidden ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Creating four buttons : Login, SignUp, LogOut, Dashboard */}
      <div className="md:flex hidden items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 rounded-[8px] border border-richblack-700 px-3 py-2">
              Log in
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 text-richblack-100 px-3 py-2 rounded-[8px] border border-richblack-700">
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/login">
            <button
              className="bg-richblack-800 text-richblack-100 px-3 py-2 rounded-[8px] border border-richblack-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              LogOut
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-richblack-100 px-3 py-2 rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>

      <div className="visible md:hidden mr-3">
        <FiMenu
          fontSize={28}
          className="text-richblack-200 font-light"
        ></FiMenu>
      </div>
    </div>
  );
}

export default Navbar;
