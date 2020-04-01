import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import '../about.css';
import profile from '../assets/img/58384030_1821627904604928_3336419814888439808_n_upscaled_image_x4.jpg';
const about = () => {

    return (
        <div className="App">
            <header className="App-header">
                <Nav/>
            </header>

                <div className="aboutContent">
                    <h1>About</h1>
                    <div className="aboutMe">
                        <img className="profilePic" src={profile} alt=""/>

                        <p className="myName">My name is</p>
                        <p className="iAm">Jeroen De Vetter</p>
                        <p className="someInfo">
                            I am a junior web developer who is currently living the coding dream and who is very eager to learn new skills.
                            Currently i am dabbling with gsap and i have
                            some experience in HTML, Javascript,
                            React, CSS, node.js and Express.js
                        </p>
                    </div>
                </div>


            <Footer/>
        </div>
    )
};
export default about;