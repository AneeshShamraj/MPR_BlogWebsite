import React, { useState } from "react";
import Signedin from "./Signedin";
import Notsignedin from "./Notsignedin";
import "./Navbar.css";
const Navbar = () => {
  // Todo : Check whether user has logedin or not .

  const [user, setUser] = useState(true);
  return (
    <div class="nav_container">{user ? <Signedin /> : <Notsignedin />}</div>
  );
};

export default Navbar;
