import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import ProjectContainer from "../component/projectContainer";
import Movieimg from '../assets/img/Annotation+2020-03-16+121011_upscaled_image_x4.png';
import '../project.css';
const project = () => {

    return (
        <div className="App">
            <header className="App-header">
                <Nav/>
            </header>

            <div className="projectContent">
                <h1>Projects</h1>
                <ProjectContainer title="The Movie React app" src={Movieimg}/>
            </div>

            <Footer/>
        </div>
    )
};
export default project;