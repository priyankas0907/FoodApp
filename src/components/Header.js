import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("Header Rendered");
  [btnText,setBtnText]=useState('Login');
  const toggleButtontext=()=>{
    btnText === 'Login' ? setBtnText('Logout') : setBtnText('Login');
  }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/">Cart</Link>
            <button className="loginbtn" onClick={() => toggleButtontext() }>{btnText}</button>
          </ul>
        </div>
        
      </div>
    );
  };

  export default Header;