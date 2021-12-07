import React,{useState} from "react";
// import './styles.css';
import UserHoverDetail from "../../UserHoverDetail";
import { useHistory } from "react-router";

const Blogpost = ({id,blog}) => {
    const history = useHistory();
    const [show,setShow] = useState(false);
    const reactionEmoji = {
        like: '👍',
        dislike: '👎',
      }
  return (
    <div className="blogpost">
      <div className="top">
          <div className="img"></div>
          <div className="name" onMouseLeave={()=> {
              setTimeout(()=>setShow(false),300);
          } }  onMouseEnter={()=> setShow(true) }  >Hritik Sharma</div>
          {show?<UserHoverDetail/>:null}
      </div>
      <div className="body">
        <div className="title"onClick={()=>history.push("/"+(id+1))}  >{blog.title}</div>
        <div className="description">Short Desc about the blog, 
        Small and crisp... 
        Aur kya likhu ?
        </div>
      </div>
      <div className="bottom">
        <div className="bottom_container">
        {Object.keys(reactionEmoji).map(key=>
          <span  >
            <small className="Emoji">{reactionEmoji[key]}</small>
            <p>{100}</p>
          </span>
        )}
        </div>
      </div>
    </div>
  );
};

export default Blogpost ;