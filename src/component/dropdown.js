import React from "react";
import {Link} from "react-router-dom";

const dropDown = (props) => {

    return(
        <div className="topNav" style={{visibility: props.navDisplay , opacity: props.opacity ,  transition: 'visibility 0.2s, opacity 0.2s linear'}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )

};
export default dropDown;