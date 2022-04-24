import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./styles.css";
import Blogpost from "./Blogpost/Blogpost";
import SearchBar from "./SearchBar";
import axios from "axios";
import SearchBarComponent from "./SearchBar";

const HomePage = () => {
  const category = ["science", "entertainment", "news", "tourism", "finance"];
  const [blogs, setBlogs] = useState([]);
  const [interestblogs,setInterests]=useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/home/")
      .then((response) => response.json())
      .then((json) => {
        setBlogs(json);
        console.log(blogs);
      });
    // axios.get("http://localhost:5000/home/")
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/home/interestedblogs")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setInterests(json);
  //       console.log(interestblogs);
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:5000/home/interestedblogs",{headers:{token:localStorage.token}})
      .then((response) => response.json())
      .then((json) => {
        setInterests(json);
        console.log(interestblogs);
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
    <div className="home__container">
      <div className="homePage__left">
      <h3>Latest Blogs</h3>
      <div className="homePage__left_interest"  >
        {[...blogs].map((val, index) => (
                  <Blogpost id={val._id} key={val._id} blog={val} />
        ))}

      </div>
        
      </div>
      <div className="homePage__right">
        <div className="homePage__right_card">
          <h3>Your Interests</h3>
          {[...interestblogs].splice(0,10).map((val, index) => (
          <Blogpost id={val._id} key={val._id} blog={val} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
