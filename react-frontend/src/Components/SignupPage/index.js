import React, { useState } from "react";
import { useHistory } from "react-router";

export const SignupPage = () => {
    const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e)=>{
    e.preventDefault();
    if(email && password){
        history.push("/");
    }
  }
  return (
    <form className="signuppage__wrapper">
        <h1>Signup</h1>
      <input
        type="email"
        className="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleClick}
      >Signup</button>
    </form>
  );
};
