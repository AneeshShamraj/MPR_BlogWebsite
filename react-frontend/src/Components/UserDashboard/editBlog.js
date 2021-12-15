import React, { useState } from "react";
import { useParams } from "react-router";
import "./create.css";

const EditBlog = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState(props.location.param1[id].title);
  const [content, setContent] = useState(props.location.param1[id].content);

  console.log("id", id);
  const handleChange = (e) => {
    console.log(e);
    // this.setState({
    //   [e.target.id]: e.target.value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // this.props.createProject(this.state);
  };

  return (
    <div className="create-container">
      <form onSubmit={handleSubmit} className="white create-form">
        <h5 className="grey-text text-darken-3">Create new blog</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={title}
            autoFocus
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
            value={content}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
