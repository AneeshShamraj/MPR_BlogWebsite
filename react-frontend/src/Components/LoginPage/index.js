import React, { useState } from "react";
import { useHistory } from "react-router";
import "./styles.css";
import axios from "axios";

export const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const body={
      password:e.target.password.value,
      email:e.target.email.value,
      }
      console.log({body});
    
      axios.post("http://localhost:5000/auth/login",body)
      .then(res =>{
        localStorage.setItem("token", res.headers.token);
        window.location.href="/";
      })
      .catch(err =>{
        if(err.response.status===400){
          alert(err.response.data);
        }
      });
  };
  return (
    <div className="container">
      <div className="card card-container">
        <img id="profile-img" className="profile-img-card" src="" />
        <p id="profile-name" className="profile-name-card">
          {" "}
          <h1>BlogSquad</h1>
        </p>
        <form onSubmit={handleClick} className="form-signin">
          <span id="reauth-email" className="reauth-email"></span>
          <input
            type="email"
            id="inputEmail"
            name="email"
            className="form-control"
            placeholder="Email"
            required
            autofocus
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            id="inputPassword"
            name="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button
            className="btn btn-lg btn-primary btn-block btn-login btn btn-dark"
            type="submit"
            
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
