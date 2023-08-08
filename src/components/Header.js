import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="loginbtn" onClick={() => toggleButtontext() }>{btnText}</button>
          </ul>
        </div>
        
      </div>
    );
  };

  export default Header;