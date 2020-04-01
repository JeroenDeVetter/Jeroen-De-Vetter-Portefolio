import React from "react";

const ProjectContainer = (props) => {
    return (
        <div>
            <div className="Projects">
                <h2>{props.title}</h2>
                <img id="projectImg" src={props.src} alt="project img"/>
                <div className="projectInfo">
                    <p>This project is made with react and express.js</p>
                    <p>
                        You can visit this project on but the backend
                        has no hosting jet
                    </p>
                </div>
            </div>
        </div>
    )
};
export default ProjectContainer;