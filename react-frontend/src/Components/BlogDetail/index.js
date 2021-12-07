import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const BlogDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
        console.log(user);
      });
  }, []);
  return (
    <div className="BlogDetail_wrapper">
      <h1>{user.title}</h1>
    </div>
  );
};
export default BlogDetail;
