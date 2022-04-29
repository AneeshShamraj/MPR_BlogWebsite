import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Blogpost from "./Components/HomePage/Blogpost/Blogpost";
import BlogDetail from "./Components/BlogDetail";
import { UserDashboard } from "./Components/UserDashboard/UserDashboard";
import Create from "./Components/UserDashboard/create";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
import { SignupPage } from "./Components/SignupPage";
import { LoginPage } from "./Components/LoginPage";
import { Profile } from "./Components/UserDashboard/profile";
import EditBlog from "./Components/UserDashboard/editBlog";
import SavedPage from "./Components/UserDashboard/saved";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/edit/:id" component={EditBlog} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={Home} />
        <Route exact path="/user-dashboard" component={UserDashboard} />
        <Route exact path="/blogs/:id" component={BlogDetail} />
        <Route exact path="/savedblogs" component={SavedPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
