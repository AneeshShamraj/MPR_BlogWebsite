import React, { useState, useEffect } from "react";
import "./profile.css";
import { faCoffee, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
export const Profile = () => {
  const [user, setUser] = useState([]);
  useEffect(()=>{
  axios.get("http://localhost:5000/users/profile", {headers: {
      token: localStorage.token
    }})
    .then((res)=>{
      console.log(res.data);
      setUser(res.data);
    })
    .catch(err =>{
        alert(err.response.data);
      })
  },[]);
  if(user){
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="card-title mb-4">
                <div className="d-flex justify-content-start">
                  <div className="image-container">
                    <img
                      // src="http://placehold.it/150x150"
                      id="imgProfile"
                      // style="width: 150px; height: 150px"
                      className="img-thumbnail"
                    />
                    <div className="middle">
                      <input
                        type="button"
                        className="btn btn-secondary"
                        id="btnChangePicture"
                        value="Change"
                      />
                      {/* <input
                        type="file"
                        // style="display: none"
                        id="profilePicture"
                        name="file"
                      /> */}
                    </div>
                  </div>
                  <div className="userData ml-3">
                    <h2
                      className="d-block"
                      // style="font-size: 1.5rem; font-weight: bold"
                    >
                      <a href="javascript:void(0);">BlogSquad</a>
                    </h2>
                    {/* <h6 className="d-block">
                      <a href="javascript:void(0)">1,500</a> Video Uploads
                    </h6>
                    <h6 className="d-block">
                      <a href="javascript:void(0)">300</a> Blog Posts
                    </h6> */}
                  </div>
                  <div className="ml-auto">
                    <input
                      type="button"
                      className="btn btn-primary d-none"
                      id="btnDiscard"
                      value="Discard Changes"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="basicInfo-tab"
                        data-toggle="tab"
                        href="#basicInfo"
                        role="tab"
                        aria-controls="basicInfo"
                        aria-selected="true"
                      >
                        Basic Info
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content ml-1" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="basicInfo"
                      role="tabpanel"
                      aria-labelledby="basicInfo-tab"
                    >
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label
                          // style="font-weight: bold"
                          >
                            Full Name
                          </label>
                        </div>
                        <div className="col-md-8 col-6">
                          {/* <input
                            type="text"
                            name="text"
                            id="inputTag"
                            defaultValue= {user.firstname}
                          /> */}
                          <p>{user.firstname} {user.lastname}</p>
                        </div>
                      </div>
                      <hr />

                      {/* <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label
                          // style="font-weight: bold"
                          >
                            Birth Date
                          </label>
                        </div>
                        <div className="col-md-8 col-6">
                          <input
                            type="text"
                            name="text"
                            id="inputTag"
                            value=" 10/02/02"
                          />
                        </div>
                      </div>
                      <hr /> */}

                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label
                          // style="font-weight: bold"
                          >
                            Email
                          </label>
                        </div>
                        <div className="col-md-8 col-6">
                          {/* <input
                            type="text"
                            name="text"
                            id="inputTag"
                            value=""
                          /> */}
                          <p>{user.email}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label
                          // style="font-weight: bold"
                          >
                            Password
                          </label>
                        </div>
                        <div className="col-md-8 col-6">
                           <input
                            type="password"
                            name="password"
                            id="passwordInput"
                          /> 

                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label
                          // style="font-weight: bold"
                          >
                            Confirm Password
                          </label>
                        </div>
                        <div className="col-md-8 col-6">
                          <input
                            type="password"
                            name="confPassword"
                            id="confPasswordInput"
                          />
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div className="save">
                      <input
                        type="button"
                        className="btn btn-secondary btn-lg btn-dark"
                        id="btnSave"
                        value="SAVE"
                        onClick={()=>{
                          const body = {
                              password: document.getElementById('passwordInput').value,
                              confPassword: document.getElementById('confPasswordInput').value
                            };
                            axios.post("http://localhost:5000/users/profile/changepassword", body, {
                              headers: {token: localStorage.token}
                            }).then((res)=>{
                              console.log(res);
                              alert('password changed succesfully');
                            }).catch(err=>{
                              console.error(err);
                              alert("passwods don't match")
                            });
                        }}
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
else{
  return(
    <h1>Loading</h1>
  );
};}