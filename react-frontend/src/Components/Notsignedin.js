import React from "react";
import './NotSignedin.css'

const Notsignedin = ()=>{
    return(
        <div className="Notsignedin_container">
            <div className="left">
                <h3>Blog <br/>  Squad</h3>
            </div>
            <div className="right">
                <a href="/">Explore</a>
                <a href="/login">Login</a>
                <a href="/signup">Sign up</a>
            </div>
        </div>
    )
}

export default Notsignedin ;