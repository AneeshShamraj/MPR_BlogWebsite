import React from "react";
import "./styles.css";
import { faCoffee, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Profile = () => {
  return (
    <>
      <div className="container-fluid display-table">
        <div className="row display-table-row">
          <div
            className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
            id="navigation"
          >
            <div className="navi">
              <ul>
                <li className="active">
                  <a href="#">
                    <i className="fa fa-bar-chart" aria-hidden="true"></i>
                    <span className="hidden-xs hidden-sm">User Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="create.html">
                    <i className="fa fa-tasks" aria-hidden="true"></i>
                    <span class="hidden-xs hidden-sm">Create Blog</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span className="hidden-xs hidden-sm">Home</span>
                  </a>
                </li>
                <li>
                  <a href="profile.html">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <span className="hidden-xs hidden-sm">Profile</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa fa-cog" aria-hidden="true"></i>
                    <span className="hidden-xs hidden-sm">Setting</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 col-sm-11 display-table-cell v-align">
            <button type="button" className="slide-toggle">
              Slide Toggle
            </button>
            <div className="row">
              <header>
                <div className="col-md-7">
                  <nav className="navbar-default pull-left">
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="offcanvas"
                        data-target="#side-menu"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                  </nav>
                  <div className="search hidden-xs hidden-sm">
                    <input type="text" placeholder="Search" id="search" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="header-rightside">
                    <ul className="list-inline header-top pull-right">
                      <li>
                        <a href="#">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon-info">
                          <i className="fa fa-bell" aria-hidden="true"></i>
                          <span className="label label-primary">2</span>
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="#"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <img
                            src="http://jskrishna.com/work/merkury/images/user-pic.jpg"
                            alt="user"
                          />
                          <b className="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <div className="navbar-content">
                              <span>JS Krishna</span>
                              <p className="text-muted small">
                                me@jskrishna.com
                              </p>
                              <div className="divider"></div>
                              <a href="#" className="view btn-sm active">
                                View Profile
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
            </div>
            <div className="user-dashboard">
              <h1>Hello, Blogger</h1>
              <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-12 gutter">
                  <div className="sales">
                    <h2>Your Blog</h2>

                    <div className="btn-group">
                      <button
                        className="btn btn-secondary btn-lg dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span>Period:</span> Last Year
                      </button>
                      <div className="dropdown-menu">
                        <a href="#">2012</a>
                        <a href="#">2014</a>
                        <a href="#">2015</a>
                        <a href="#">2016</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-7 col-xs-12 gutter">
                  <div className="sales report">
                    <h2>Report</h2>
                    <div className="btn-group">
                      <button
                        className="btn btn-secondary btn-lg dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span>Period:</span> Last Year
                      </button>
                      <div className="dropdown-menu">
                        <a href="#">2012</a>
                        <a href="#">2014</a>
                        <a href="#">2015</a>
                        <a href="#">2016</a>
                      </div>
                    </div>
                  </div>
                </div>
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
