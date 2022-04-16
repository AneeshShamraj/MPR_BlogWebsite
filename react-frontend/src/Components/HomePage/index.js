import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./styles.css";
import Blogpost from "./Blogpost/Blogpost";
import SearchBar from "./SearchBar";
import axios from "axios";

const HomePage = () => {
  const category = ["science", "entertainment", "news", "tourism", "finance"];
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home/")
      .then((response) => response.json())
      .then((json) => {
        setBlogs(json);
        console.log(blogs);
      });
    // axios.get("http://localhost:5000/home/")
  }, []);

  const customStyles = {
    placeholder: (provided, state) => ({
      ...provided,
      marginRight: "auto",
    }),
  };
  const handleOnChange = () => {
    console.log("inside on change");
  };
  return (
    <div className="home__container">
      <div className="homePage__left">
        {[...blogs].map((val, index) => (
          <Blogpost id={val._id} key={val._id} blog={val} />
        ))}
      </div>
      <div className="homePage__right">
        <div className="homePage__right_card">
          <h3>Interests</h3>
          {[...blogs].splice(0,2).map((val, index) => (
          <Blogpost id={val._id} key={val._id} blog={val} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
