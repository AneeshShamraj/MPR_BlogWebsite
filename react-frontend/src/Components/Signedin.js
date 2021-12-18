import React from "react";
// import "./Signedin.css";
import { NavLink } from "react-router-dom";

const Signedin = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/user-dashboard">User Dashboard</NavLink>
      </li>
      <li>
        <NavLink onClick={() => props.onLogoutClick()} to="/">
          Logout
        </NavLink>
      </li>

      {/* <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          
        </NavLink>
      </li> */}
    </ul>
  );
};

export default Signedin;
