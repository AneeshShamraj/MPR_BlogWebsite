import React from "react";
import './Signedin.css'

const Signedin = ()=>{
    return(
        <div className="Signedin_container">
            <div className="left">
                <h3>Blog <br/>Squad</h3>
            </div>
            <div className="right">
                <a href="/">Home</a>
                {/* <a href="create">Create Blog</a> */}
                <a href="#">Search</a>
                <a href="user-dashboard">User Dashboard</a>

                
            </div>
        </div>
    )
}

export default Signedin ;