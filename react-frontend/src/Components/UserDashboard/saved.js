import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./save.css";
import Blogpost from "../HomePage/Blogpost/Blogpost";
// import SearchBar from "./SearchBar";
import axios from "axios";

const SavedPage = () => {
  console.log("inside new page");
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
  console.log("rendering");
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
    <div className="container">
      <Skeleton />
      ehldsjflkjas
      <div className="rightPost">
        Hello
        {[...blogs].map((val, index) => (
          <Blogpost id={val._id} key={val._id} blog={val} />
        ))}
      </div>
    </div>
  );
};

export default SavedPage;
