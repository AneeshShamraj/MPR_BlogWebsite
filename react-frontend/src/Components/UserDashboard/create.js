import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import "./create.css";
import axios from "axios";

const Create = () => {
  if (!localStorage.token) {
    window.location = "/";
    alert("User must be signed in to access this");
  }
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    console.log(e);
    // this.setState({
    //   [e.target.id]: e.target.value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      postTitle: e.target.title.value,
      postBody: e.target.content.value,
      category: e.target.category.value,
    };
    console.log(body);

    axios
      .post("http://localhost:5000/home/createblog", body, {
        headers: {
          token: localStorage.token,
        },
      })
      .then((res) => {
        console.log(res);
        // if(res.err){
        //   alert(res.err);
        //   // window.location.reload();
        // }
        // else{
        window.location = "/";
        // }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert(err.response.data);
        }
      });
  };

  return (
    <div className="create-container">
      <form onSubmit={handleSubmit} className="white create-form">
        <h5 className="grey-text text-darken-3">Create new blog</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            className="materialize-textarea"
            onChange={(e) => handleChange(e.target.value)}
          ></textarea>
        </div>
        <div className="input-field">
          <p>Add Blog category</p>
         
          <Select
            className="mui-singleSelectTag"
            multiple={false}
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
          >
            <MenuItem value="science">science</MenuItem>
            <MenuItem value="entertainment">entertainment</MenuItem>
            <MenuItem value="tourism">tourism</MenuItem>
            <MenuItem value="finance">finance</MenuItem>
            <MenuItem value="other">other</MenuItem>
          </Select>
        </div>
        {/* <div className="input-field">
          <label htmlFor="category">Enter the category(entertainment,science,tourism,finance,news)</label>
          <input type="text" name="category" id="category" onChange={(e)=>handleChange(e.target.value)} />
        </div> */}

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
