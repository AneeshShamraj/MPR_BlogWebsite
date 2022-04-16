import React, { useState } from "react";
import "./styles.css";
import UserHoverDetail from "../../UserHoverDetail";
import { useHistory } from "react-router";


const Blogpost = ({ id, blog }) => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const reactionEmoji = {
    like: "👍",
    dislike: "👎",
  };
  return (
    <div className="blogpost">
      <div className="top">
      



          {/* <div className="img"></div> */}
          <div className="name"
          
          >
          {blog.user}</div>
          {/* {show?<UserHoverDetail/>:null} */}
      </div>
      <div className="body">
        <div className="title"onClick={()=>history.push("/blogs/"+(id))}  >{blog.title}</div>
        <div className="description">{blog.content.substring(0,250) }.......
        
        
        
        {/* <i class="icon fas fa-share-nodes fa-2x"></i> */}
        {/* <i class="icon fas fa-solid fa-share-nodes fa-2x"></i> */}
        </div>
      </div>
     
      <div className="favicon">
      <i className="icon fas fa-heart fa-2x"></i>
      <i className="icon fas fa-flag fa-2x"></i>
      <i className="icon fas fa-bookmark fa-2x"></i>
      </div>
    </div>
  );
};

export default Blogpost;
