import React from "react";
import './Signedin.css'

const Signedin = ()=>{
    return(
        <div className="Signedin_container">
            <div className="left">
                Logo
            </div>
            <div className="right">
                <a href="/">Home</a>
                <a href="create">Create Blog</a>
                <a href="#">Search</a>
                <a href="profile">Profile</a>

                
            </div>
        </div>
    )
}

export default Signedin ;