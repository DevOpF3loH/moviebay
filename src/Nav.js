import React from 'react';
import logo from "./images/logo.png";
import userLogo from "./images/userlogo.png";
import "./Nav.css";


function Nav() {

  return (
    <div className='nav'>
      <img className='nav_logo' src={logo} alt="Moviebay Logo"/>

      <img className='nav_avatar' src={userLogo} alt="User Avatar"/>
    </div>
  )
}

export default Nav