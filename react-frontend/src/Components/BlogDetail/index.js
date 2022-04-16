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
  useEffect(()=>{
    axios.get("http://localhost:5000/home/getblog/"+id)
  .then(function (response) {
    console.log(response.data);
    setBlogTitle(response.data.title);
    setBlogContent(response.data.content);
  })
  .catch(function (error) {
    console.log(error);
  })
  },[]);
  if(blogContent!=="" && blogTitle!==""){
  return (
    <div className="BlogStyle">

      <div className="BlogDetail_wrapper">
        <h1>{blogTitle}</h1>
        
      </div>


      
            <div className="col-lg-9 col-md-9 col-sm-12">
              <p className="lead">
                {blogContent}
              </p>
              
            </div>
            <i className="comment icon fas fa-regular fa-comment fa-2x"></i>
          </div>
        
  );
}
else{
  return(<div>
  </div>);
}
};
export default BlogDetail;