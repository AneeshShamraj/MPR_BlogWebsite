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
          // onMouseLeave={()=> {
          //     setTimeout(()=>setShow(false),300);
          // } }  onMouseEnter={()=> setShow(true) }  
          >
          {blog.user}</div>
          {/* {show?<UserHoverDetail/>:null} */}
      </div>
      <div className="body">
        <div className="title"onClick={()=>history.push("/blogs/"+(id))}  >{blog.title}</div>
        <div className="description">{blog.content.substring(0,25)}

        </div>
      </div>
      {/* <div className="bottom">
        <div className="bottom_container">
        {Object.keys(reactionEmoji).map(key=>
          <span  >
            <small className="Emoji">{reactionEmoji[key]}</small>
            <p>{100}</p>
          </span>
        )}
        </div>
      </div> */}
    </div>
  );
};

export default Blogpost;
