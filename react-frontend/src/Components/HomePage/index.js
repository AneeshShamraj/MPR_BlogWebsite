import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./styles.css";
import Blogpost from "./Blogpost/Blogpost";
import SearchBar from "./SearchBar";

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
    <div class="container">
      <SearchBar
        placeholder={"Search..."}
        onChange={handleOnChange}
        options={[]}
        customStyles={customStyles}
      />
      <Skeleton />
      <div className="rightPost">
        {[...blogs].splice(0, 5).map((val, index) => (
          <Blogpost id={index} key={index} blog={val} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
