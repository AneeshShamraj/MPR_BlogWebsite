import React, { useState } from "react";
import { useHistory } from "react-router";
import "./styles.css";

export const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    if (email && password) {
      history.push("/");
    }
  };
  return (
    <div class="container">
      <div class="card card-container">
        <img id="profile-img" class="profile-img-card" src="" />
        <p id="profile-name" class="profile-name-card">
          {" "}
          <h1>BlogSquad</h1>
        </p>
        <form class="form-signin">
          <span id="reauth-email" class="reauth-email"></span>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email"
            required
            autofocus
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button
            className="btn btn-lg btn-primary btn-block btn-login btn btn-dark"
            type="submit"
            onClick={handleClick}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
