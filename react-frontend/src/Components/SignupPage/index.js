import React, { useState } from "react";
import { useHistory } from "react-router";
import "./styles.css";

export const SignupPage = () => {
  const history = useHistory();
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [checkbox, setcheckBox] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      firstname &&
      lastname &&
      email &&
      newpassword &&
      confirmpassword &&
      checkbox
    ) {
      history.push("/");
    }
  };

  return (
    <div class="container">
      <div class="row1">
        <div class="col-xs-12 col-sm-12 col-md-4 well well-sm">
          <legend>
            <a href="http://www.jquery2dotnet.com">
              <i class="glyphicon glyphicon-globe"></i>
            </a>{" "}
            Sign up!
          </legend>
          <form action="#" method="post" class="form" role="form">
            <div className="row">
              <div class="col-xs-6 col-md-6">
                <input
                  class="form-control"
                  name="firstname"
                  placeholder="Full Name"
                  type="text"
                  required
                  autofocus
                  onChange={(e) => setfirstName(e.target.value)}
                  value={firstname}
                />
              </div>
              <div className="col-xs-6 col-md-6">
                <input
                  class="form-control"
                  name="lastname"
                  placeholder="Last Name"
                  type="text"
                  required
                  onChange={(e) => setlastName(e.target.value)}
                  value={lastname}
                />
              </div>
            </div>
            <input
              class="form-control"
              name="userName"
              placeholder="Create UserName"
              type="email"
              onChange={(e) => setuserName(e.target.value)}
              value={username}
            />
            <input
              class="form-control"
              name="youremail"
              placeholder="Your Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              class="form-control"
              name="password"
              placeholder="New Password"
              type="password"
              onChange={(e) => setnewPassword(e.target.value)}
              value={newpassword}
            />
            <input
              class="form-control"
              name="confirm password"
              placeholder="Confirm Password"
              type="email"
              onChange={(e) => setconfirmPassword(e.target.value)}
              value={confirmpassword}
            />
            {/* <div id="remember" class="checkbox">
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
            <button className="sign-btn btn btn-lg btn-primary btn-block"
              // class="btn btn-lg btn-primary btn-block"
              type="submit"
              onClick={handleClick}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
