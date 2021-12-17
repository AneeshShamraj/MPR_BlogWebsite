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
      console.log("anil sekz");
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
          // handle kr le bsdk
          // alert(err.response.data);
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
                  {/* <li className="active">
                    <a href="#">
                      <i className="fa fa-bar-chart" aria-hidden="true"></i>
                      <span className="hidden-xs hidden-sm">User Dashboard</span>
                    </a>
                  </li> */}
                  {/* <li> */}
                  <a href="create">
                    {/* <i className="fa fa-tasks" aria-hidden="true"></i>
                      <span className="hidden-xs hidden-sm">Create Blog</span> */}

                    {/* </li> */}
                    <button
                      type="button"
                      className="btn btn-dark btn-secondary btn-lg btn-block"
                    >
                      Create Blog
                    </button>
                  </a>
                  {/* <li>
                    <a href="/">
                      <i className="fa fa-home" aria-hidden="true"></i>
                      <span className="hidden-xs hidden-sm">Home</span>
                    </a>
                  </li> */}

                  {/* <li> */}
                  <a href="profile">
                    {/* <i className="fa fa-user" aria-hidden="true"></i>
                      <span className="hidden-xs hidden-sm">Profile</span> */}

                    {/* </li> */}
                    <button
                      type="button"
                      className="btn btn-dark btn btn-secondary btn-lg btn-block"
                    >
                      Profile
                    </button>
                  </a>
                  {/* <li>
                    <a href="#">
                      <i className="fa fa-cog" aria-hidden="true"></i>
                      <span className="hidden-xs hidden-sm">Setting</span>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <div className="row">
                <header>
                  <div className="col-md-7">
                    <div className="search hidden-xs hidden-sm">
                      <input type="text" placeholder="Search" id="search" />
                    </div>
                  </div>
                </header>
              </div> */}

            {/* search bar */}
            {/* <div className="container">
              <SearchBar
                placeholder={"Search..."}
                onChange={handleOnChange}
                options={[]}
                customStyles={customStyles}
              /> */}
            {/* ** */}
            <div className="user-dashboard">
              <h1>Your Blogs</h1>
            </div>
            <div className="rightPost">
              {[...blogs]
                // .filter((val) => val.id !== deletedId)
                .map((val, index) => (
                  <>
                    <Blogpost id={val._id} key={val._id} blog={val} />
                    {/* <div><i className="fa-solid fa-pen-to-square"></i></div> */}
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

      {/* <div id="add_project" className="modal fade" role="dialog">
    <div className="modal-dialog">

        <div className="modal-content">
            <div className="modal-header login-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Add Project</h4>
            </div>
            <div className="modal-body">
                        <input type="text" placeholder="Project Title" name="name"/>
                        <input type="text" placeholder="Post of Post" name="mail"/>
                        <input type="text" placeholder="Author" name="passsword"/>
                        <textarea placeholder="Desicrption"></textarea>
                </div>
            <div className="modal-footer">
                <button type="button" className="cancel" data-dismiss="modal">Close</button>
                <button type="button" className="add-project" data-dismiss="modal">Save</button>
            </div>
        </div>

    </div>
</div> */}
    </>
  );
};
