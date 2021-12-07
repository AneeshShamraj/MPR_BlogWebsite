import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage";
import { CreateBlog } from "./CreateBlog";
import { SignupPage } from "./SignupPage";

const Home = () => {
  
  return (
    <div class="Home_container">
      <HomePage />
      {/* <CreateBlog /> */}
    </div>
  );
};

export default Home;
