import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  console.log("Header Rendered");
  [btnText,setBtnText]=useState('Login');

  const toggleButtontext=()=>{
    btnText === 'Login' ? setBtnText('Logout') : setBtnText('Login');
  }

  const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between bg-pink-400 shadow-lg mb-2 px-6 sm:bg-yellow-200 lg:to-blue-400">
        <div className="logo-container">
          <img
            className="w-48"
            src= {LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex m-4 p-4">
            <li className="px-4">Online Status : {onlineStatus === true ? "✅" : "🔴"}</li>
            <li className="px-4">
            <Link to="/">Home</Link>
            </li>
            <li className="px-4">
            <Link to="/grocery"> Grocery </Link>
            </li>
            <li className="px-4">
            <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
            <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
            <Link to="/">Cart</Link>
            </li>
            <button className="loginbtn" onClick={() => toggleButtontext() }>{btnText}</button>
          </ul>
        </div>
        
      </div>
    );
  };

  export default Header;