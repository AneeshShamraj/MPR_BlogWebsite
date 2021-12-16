import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./styles.css";
import Blogpost from "./Blogpost/Blogpost";
import { Intro } from "./Intro";
import axios from "axios";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home/")
      .then((response) => response.json())
      .then((json) => {
        setBlogs(json);
        console.log(blogs);
      });
  }, []);
  return (
    <div class="container">
      <Intro />
      <Skeleton />
      <div className="rightPost">
        {[...blogs].map((val, index) => (
          <Blogpost id={val.id} key={val._id} blog={val} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
