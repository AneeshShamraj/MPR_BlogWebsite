import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./styles.css";
import Blogpost from "./Blogpost/Blogpost";
import { Intro } from "./Intro";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
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
        {[...blogs].splice(0, 10).map((val, index) => (
          <Blogpost id={index} key={index} blog={val} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
