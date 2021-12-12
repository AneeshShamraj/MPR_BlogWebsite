import React from "react";
import "./styles.css";
import { faCoffee, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const UserDashboard = () => {
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
                  <li class="active">
                    <a href="#">
                      <i class="fa fa-bar-chart" aria-hidden="true"></i>
                      <span class="hidden-xs hidden-sm">User Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="create">
                      <i class="fa fa-tasks" aria-hidden="true"></i>
                      <span class="hidden-xs hidden-sm">Create Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i class="fa fa-home" aria-hidden="true"></i>
                      <span class="hidden-xs hidden-sm">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="profile">
                      <i class="fa fa-user" aria-hidden="true"></i>
                      <span class="hidden-xs hidden-sm">Profile</span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-cog" aria-hidden="true"></i>
                      <span class="hidden-xs hidden-sm">Setting</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-10 col-sm-11 display-table-cell v-align">
              <div class="row">
                <header>
                  <div class="col-md-7">
                    <div class="search hidden-xs hidden-sm">
                      <input type="text" placeholder="Search" id="search" />
                    </div>
                  </div>
                </header>
              </div>
              <div class="user-dashboard">
                <h1>Hello, Blogger</h1>
              </div>
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
