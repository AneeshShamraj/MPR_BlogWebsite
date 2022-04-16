import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./create.css";

const EditBlog = (props) => {
  if(!localStorage.token){
    window.location="/";
    alert("User must be signed in to access this");
  }
  const { id } = useParams();
  console.log({id});
  // const [title, setTitle] = useState(props.location.param1[id].title);
  // const [content, setContent] = useState(props.location.param1[id].content);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

// useEffect(()=>{
//   axios.get("http://localhost:5000/users/profile", {headers: {
//       token: localStorage.token
//     }})
//     .then((res)=>{
//       console.log(res.data);
//       setUser(res.data);
//     })
//     .catch(err =>{
//         alert(err.response.data);
//       })
//   },[]);

  useEffect(()=>{
    axios.get("http://localhost:5000/home/getblog/"+id,{headers:{
      token:localStorage.token
    }})
    .then((res)=>{
      console.log(res);
      setTitle(res.data.title);
      setContent(res.data.content);

    })
    .catch(err=>{
      alert(err.response.data);
    })
  }, []);

  console.log("id", id);
  // const handleChange = (e) => {
  //   console.log(e);
    // this.setState({
    //   [e.target.id]: e.target.value,
    // });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // this.props.createProject(this.state);
    const body={
      postTitle:e.target.title.value,
      postBody:e.target.content.value,
      }
      console.log(body);
    
      axios.post("http://localhost:5000/home/editblog/"+id,body, {
        headers: {
          token: localStorage.token
        }
      })
      .then(res =>{
        console.log(res);
        window.location="/"
      })
      .catch(err =>{
        if(err.response.status===400){
          console.log(err);
          alert(err.response.data);
        }
        else{
          alert(err.response.data);
          window.location="/"
        }
      });
  };
  if(title && content){
  return (
    <div className="create-container">
      <form onSubmit={handleSubmit} className="white create-form">
        <h5 className="grey-text text-darken-3">Edit blog</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            // onChange={handleChange}
            defaultValue={title}
            autoFocus
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            // onChange={handleChange}
            // defaultValue={content}
            defaultValue={content}
            autoFocus
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">ADD</button>
        </div>
      </form>
    </div>
  );
  }
  else{return(
    <div></div>
  );}
};

export default EditBlog;
