import React, { useState } from "react";
import Signedin from "./Signedin";
import Notsignedin from "./Notsignedin";
// import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  if(localStorage.token){
   var checkLoggedIn=true
  }
  else{
   var checkLoggedIn=false;
  }

  const [isLoggedIn, setIsLoggedIn] = useState(checkLoggedIn);
  const handleLogoutClick = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };


//   const [user, setUser] = useState(false);

  return (
    // <nav className="nav-wrapper grey darken-3">
    <nav className="nav-wrapper #ec407a pink lighten-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          BlogSquad
        </Link>
        {isLoggedIn ? (
          <Signedin onLogoutClick={handleLogoutClick} />
        ) : (
          <Notsignedin />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
