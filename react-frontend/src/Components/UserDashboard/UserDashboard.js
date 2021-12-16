import React from "react";
import "./styles.css";
import { faCoffee, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../HomePage/SearchBar";
import Blogpost from "../HomePage/Blogpost/Blogpost";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setBlogs(json);
        console.log(blogs);
      });
  }, []);
  console.log("blogs:", blogs);

  useEffect(() => {
    setBlogs(blogs.filter((blog) => blog.id !== deletedId));
  }, [deletedId]);

  return (
    <>
      <div class="home">
        <div class="container-fluid display-table">
          <div class="row display-table-row">
            <div
              class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
              id="navigation"
            >
              <div class="navi">
                <ul>
                  {/* <li class="active">
                    <a href="#">
                      <i class="fa fa-bar-chart" aria-hidden="true"></i>
                      <span class="hidden-xs hidden-sm">User Dashboard</span>
                    </a>
                  </li> */}
                  {/* <li> */}
                  <a href="create">
                    {/* <i class="fa fa-tasks" aria-hidden="true"></i>
                      <span class="hidden-xs hidden-sm">Create Blog</span> */}

                    {/* </li> */}
                    <button
                      type="button"
                      class="btn btn-dark btn-secondary btn-lg btn-block"
                    >
                      Create Blog
                    </button>
                  </a>
                  {/* <li>
                    <a href="/">
                      <i class="fa fa-home" aria-hidden="true"></i>
                      <span class="hidden-xs hidden-sm">Home</span>
                    </a>
                  </li> */}

                  {/* <li> */}
                  <a href="profile">
                    {/* <i class="fa fa-user" aria-hidden="true"></i>
                      <span class="hidden-xs hidden-sm">Profile</span> */}

                    {/* </li> */}
                    <button
                      type="button"
                      class="btn btn-dark btn btn-secondary btn-lg btn-block"
                    >
                      Profile
                    </button>
                  </a>
                  {/* <li>
                    <a href="#">
                      <i class="fa fa-cog" aria-hidden="true"></i>
                      <span class="hidden-xs hidden-sm">Setting</span>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* <div class="col-md-10 col-sm-11 display-table-cell v-align">
              <div class="row">
                <header>
                  <div class="col-md-7">
                    <div class="search hidden-xs hidden-sm">
                      <input type="text" placeholder="Search" id="search" />
                    </div>
                  </div>
                </header>
              </div> */}

            {/* search bar */}
            {/* <div class="container">
              <SearchBar
                placeholder={"Search..."}
                onChange={handleOnChange}
                options={[]}
                customStyles={customStyles}
              /> */}
            {/* ** */}
            <div class="user-dashboard">
              <h1>Your Blogs</h1>
            </div>
            <div className="rightPost">
              {[...blogs]
                .splice(0, 5)
                // .filter((val) => val.id !== deletedId)
                .map((val, index) => (
                  <>
                    <Blogpost id={index} key={index} blog={val} />
                    {/* <div><i class="fa-solid fa-pen-to-square"></i></div> */}
                    <Link to={{ pathname: `edit/${index}`, param1: blogs }}>
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
                          console.log("value id:", val.id);
                          setDeleteId(val.id);
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

      {/* <div id="add_project" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <div class="modal-content">
            <div class="modal-header login-header">
                <button type="button" class="close" data-dismiss="modal">×</button>
                <h4 class="modal-title">Add Project</h4>
            </div>
            <div class="modal-body">
                        <input type="text" placeholder="Project Title" name="name"/>
                        <input type="text" placeholder="Post of Post" name="mail"/>
                        <input type="text" placeholder="Author" name="passsword"/>
                        <textarea placeholder="Desicrption"></textarea>
                </div>
            <div class="modal-footer">
                <button type="button" class="cancel" data-dismiss="modal">Close</button>
                <button type="button" class="add-project" data-dismiss="modal">Save</button>
            </div>
        </div>

    </div>
</div> */}
    </>
  );
};
