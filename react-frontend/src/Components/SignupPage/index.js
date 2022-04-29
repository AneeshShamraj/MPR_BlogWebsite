import React, { useState } from "react";
import { useHistory } from "react-router";
import "./styles.css";
import axios from "axios";

export const SignupPage = () => {
  const history = useHistory();
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [checkbox, setcheckBox] = useState(false);
  // const [science,setScience]=useState("");
  // const [entertainment,setEntertainment]=useState("");
  // const [news,setNews]=useState("");
  // const [tourism,setTourism]=useState("");
  // const [finance,setFinance]=useState("");
  const [interests,setInterests]=useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const body={
      username:e.target.username.value,
      password:e.target.password.value,
      email:e.target.email.value,
      confPassword:e.target.confPassword.value,
      firstname:e.target.firstname.value,
      lastname:e.target.lastname.value,
      interests:interests.split(" ")
    }
      console.log({body});
    
      axios.post("http://localhost:5000/auth/register",body)
      .then(res =>{
        console.log(res);
        window.location.href="/login";
      })
      .catch(err =>{
        if(err.response.status===400){
          alert(err.response.data);
        }
      });


  };

  return (
    <div className="container">
      <div className="row1">
        <div className="col-xs-12 col-sm-12 col-md-4 well well-sm">
          <legend>
            <a href="http://www.jquery2dotnet.com">
              <i className="glyphicon glyphicon-globe"></i>
            </a>{" "}
            Sign up!
          </legend>
          <form onSubmit={handleClick} className="form" >
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <input
                required
                  className="form-control"
                  name="firstname"
                  placeholder="Full Name"
                  type="text"
        
                  autofocus
                  onChange={(e) => setfirstName(e.target.value)}
                  value={firstname}
                />
              </div>
              <div className="col-xs-6 col-md-6">
                <input
                required
                  className="form-control"
                  name="lastname"
                  placeholder="Last Name"
                  type="text"
      
                  onChange={(e) => setlastName(e.target.value)}
                  value={lastname}
                />
              </div>
            </div>
            <input
            required
              className="form-control"
              name="username"
              placeholder="Create UserName"
              type="text"
              onChange={(e) => setuserName(e.target.value)}
              value={username}
            />
            <input
            required
              className="form-control"
              name="email"
              placeholder="Your Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
            required
              className="form-control"
              name="password"
              placeholder="New Password"
              type="password"
              onChange={(e) => setnewPassword(e.target.value)}
              value={newpassword}
            />
            <input
            required
              className="form-control"
              name="confPassword"
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setconfirmPassword(e.target.value)}
              value={confirmpassword}
            />
            <h6>Categories available: science,entertainment,news,tourism,finance</h6><br />
            <h6>Enter your interests below. All words should be separated by a space and in lowercase</h6>
            <input
            required
            placeholder="Interests"
            name="interests"
            type="text"
            onChange={(e)=>setInterests(e.target.value)}
            />
            
            {/* <div id="remember" className="checkbox">
              <label>
                <input
                  type="checkbox"
                  value="remember-me"
                  onChange={(e) => setcheckBox(e.target.value)}
                  value={checkbox}
                />
                I agree to the terms and conditions
              </label>
            </div> */}

            <input
						className="btn btn-lg btn-primary btn-block"
						type="submit"
						value="sign up"
					/>
            

          </form>
        </div>
      </div>
    </div>
  );
};
