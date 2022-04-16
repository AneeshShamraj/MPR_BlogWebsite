import React from "react";
import "./styles.css";
import { faCoffee, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../HomePage/SearchBar";
import Blogpost from "../HomePage/Blogpost/Blogpost";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const UserDashboard = () => {
  if(!localStorage.token){
    window.location="/";
    alert("User must be signed in to access this");
  }
  const customStyles = {
    container: (base) => ({
      ...base,
      width: "70%",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      marginRight: "auto",
    }),
  };
  const handleOnChange = () => {
    console.log("inside on change");
  };
  const [blogs, setBlogs] = useState([]);
  const [deletedId, setDeleteId] = useState("");


  // sample home page data
  useEffect(() => {
    // fetch("http:localhost:5000/home/userposts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setBlogs(json);
    //     console.log(blogs);
    //   });
    axios.get("http://localhost:5000/home/userposts", {headers: {
      token: localStorage.token
    }})
    .then((res)=>{
      console.log(res);
      setBlogs(res.data);
    })
    .catch(err =>{
      if(err.response.status===400){
        alert(err.response.data);
      }
  });
}, []);
  console.log("blogs:", blogs);



  useEffect(() => {
    setBlogs(blogs.filter((blog) => blog.id !== deletedId));
    const body={blogID:deletedId}
    axios.post("http://localhost:5000/users/deleteblog",body, {headers: {token: localStorage.token}})
      .then(res =>{
        console.log(res);
        window.location='/user-dashboard';
      })
      .catch(err =>{
        if(err.response.status===400){
         
        }
      });
  }, [deletedId]);

  return (
    <>
      <div className="home">
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <div
              className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
              id="navigation"
            >
              <div className="navi">
                <ul>
                  <div className="create">
                  <a href="create">
                  
                    <button
                      type="button"
                      className="btn btn-dark btn-secondary btn-lg btn-block"
                    >
                      Create Blog
                    </button>
                  </a>
                  </div>
                  <div className="prof">
                  <a href="profile">
                   
                    <button
                      type="button"
                      className="btn btn-dark btn btn-secondary btn-lg btn-block"
                    >
                      Profile
                    </button>
                  </a>
                  </div>
                  <a href="list">
                 
                    <button
                      type="button"
                      className="btn btn-dark btn btn-secondary btn-lg btn-block"
                    >
                      YOUR LIST
                    </button>
                  </a>
                </ul>
              </div>
            </div>
          
            <div className="user-dashboard">
              <h1>Your Blogs</h1>
            </div>
            <div className="rightPost">
              {[...blogs]
                
                .map((val, index) => (
                  <>
                    <Blogpost id={val._id} key={val._id} blog={val} />
                   
                    <Link to={{ pathname: `edit/${val._id}`, param1: blogs }}>
                      <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0 edit-btn">
                          EDIT
                        </button>
                      </div>
                    </Link>
                    <div className="input-field">
                      <button
                        className="btn pink lighten-1 z-depth-0 edit-btn"
                        onClick={() => {
                          // console.log("value id:", val.id);
                          setDeleteId(val._id);
                        }}
                      >
                        DELETE
                      </button>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>

  
    </>
  );
};
