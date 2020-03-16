import React from "react";
import NavMobile from "../component/navMobile";
import FooterMobile from "../component/footerMobile";
import ProjectContainer from "../component/projectContainer";
import movieimg from '../assets/img/Annotation+2020-03-16+121011_upscaled_image_x4.png';
import '../project.css';
const project = () => {

    return (
        <div className="App">
            <header className="App-header">
                <NavMobile/>
            </header>

            <div className="projectContent">
                <h1>Projects</h1>
                <ProjectContainer title="The Movie React app" src={movieimg}/>
            </div>

            <FooterMobile/>
        </div>
    )
};
export default project;