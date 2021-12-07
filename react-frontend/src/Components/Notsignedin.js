import React from "react";
import './NotSignedin.css'

const Notsignedin = ()=>{
    return(
        <div className="Notsignedin_container">
            <div className="left">
                Logo
            </div>
            <div className="right">
                <a href="/">Explore</a>
                <a href="/login">Sign in</a>
                <a href="/signup">Sign up</a>
            </div>
        </div>
    )
}

export default Notsignedin ;