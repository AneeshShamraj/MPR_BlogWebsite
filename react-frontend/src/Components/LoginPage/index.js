import React, { useState } from "react";
import { useHistory } from "react-router";

export const LoginPage = () => {
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const handleClick = (e)=>{
    e.preventDefault();
    if(email && password){
        history.push("/");
    }
  }
  return (
    <div>
    <form >
        <h1>Login</h1>

      <div className="mb-3">
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className="mb-3">
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div className="mb-3">
      <input
        type="password"
        value={confirmpass}
        onChange={(e) => setConfirmpass(e.target.value)}
        className="form-control"
        placeholder="Confirm Password"
      />
      <button onClick={handleClick}  >Login</button>
      </div>
    </form>
    </div>
  );
};
