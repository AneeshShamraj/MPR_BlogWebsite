import React,{useState,useEffect} from "react";
// import "./styles.css";
import Blogpost from "./Blogpost/Blogpost";

const HomePage = () => {
  const [blogs , setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setBlogs(json);
        console.log(blogs);
      });
  },);
  return (
    <div class="container">
      <div id="blog" class="row">
        <div class="col-sm-2 paddingTop20">
          <nav class="nav-sidebar">
            <ul class="nav">
              <li class="active">
                <a href="javascript:;">
                  <span class="glyphicon glyphicon-star"></span> News
                </a>
              </li>
              <li>
                <a href="javascript:;">Latest news</a>
              </li>
              <li>
                <a href="javascript:;">Updates</a>
              </li>
              <li>
                <a href="javascript:;">Training</a>
              </li>
              <li>
                <a href="javascript:;">Nutrition</a>
              </li>
              <li>
                <a href="javascript:;">Proteins</a>
              </li>
              <li>
                <a href="javascript:;">Recipes</a>
              </li>
              <li>
                <a href="javascript:;">Challenge</a>
              </li>
              <li class="nav-divider"></li>
              <li>
                <a href="javascript:;">
                  <i class="glyphicon glyphicon-off"></i> Sign in
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h2 class="add">Place for your add!</h2>
          </div>
        </div>
        <div className="rightPost">
          {[...blogs].splice(0,10).map((val, index) => (
            <Blogpost id={index} key={index} blog={val}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
