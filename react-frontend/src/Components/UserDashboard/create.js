// return(
//   <div class="textbox">
//     <div class="teaxhead"></div>
//     <div class="textInput">
//       <input type="text" name="text" id="inputTag" />
//       <input type="button" name="text" class="button" value="Add" />
//     </div>
//   </div>
// )

// import { connect } from "react-redux";
// import { createProject } from "../../store/actions/projectAction";
import React, { useState } from "react";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
