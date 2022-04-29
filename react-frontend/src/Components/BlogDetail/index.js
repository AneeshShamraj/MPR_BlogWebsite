import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./styles.css";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  // useEffect(() => {
  //   fetch("https:localhost:5000/blogs/" + )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setBlog(json);
  //     });
  // }, []);
  const handleClick = (e) => {
    const payload = {
      objectId: id,
    };
    axios
      .post("http://localhost:5000/home/saveblog", payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/home/getblog/" + id)
      .then(function (response) {
        console.log(response.data);
        setBlogTitle(response.data.title);
        setBlogContent(response.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  if (blogContent !== "" && blogTitle !== "") {
    return (
      <div className="BlogStyle">
        <div className="blodyDetail__container">
          <div className="BlogDetail_wrapper">
            <h1>{blogTitle}</h1>
          </div>
          <div className="blog_body-content">
            <p className="lead">{blogContent}</p>
          </div>
        </div>
        <div>
          <button onClick={(e) => handleClick(e)} className="btn btn-secondary">
            Save
          </button>
        </div>
      </div>
    );
  } else {
    return <div>No Blog</div>;
  }
};
export default BlogDetail;
