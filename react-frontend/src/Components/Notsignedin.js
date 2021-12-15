import React from "react";
// import "./NotSignedin.css";
import { NavLink } from "react-router-dom";

const Notsignedin = () => {
  return (
    // <div className="Notsignedin_container">
    //   <div className="left">
    //     <h3>
    //       Blog <br /> Squad
    //     </h3>
    //   </div>
    //   <div className="right">
    //     <a className = "nav-explore" href="/">Explore</a>
    //     <a className = "nav-login" href="/login">Login</a>
    //     <a className = "nav-signup" href="/signup">Sign up</a>
    //   </div>
    // </div>

    <ul className="right">
      <li>
        <NavLink to="/">Explore</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};

export default Notsignedin;
