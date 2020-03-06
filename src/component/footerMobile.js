import React, {useEffect} from "react";
import Github from "../assets/img/github-logo.svg";
import LinkedIn from  "../assets/img/linkedin.svg";
import Twitter from  "../assets/img/gmail-svgrepo-com.svg";

const FooterMobile = () => {

    useEffect(() => {

        document.querySelector('.Github').addEventListener("click" ,(event) => {
            window.location.href = "https://github.com/JeroenDeVetter";
        });
        document.querySelector('.LinkedIn').addEventListener("click" ,(event) => {
            window.location.href = "https://www.linkedin.com/in/jeroen-de-vetter-897912188/";
        });

    }, []);

    return (
        <footer>
            <div className="footerContainer">
                <div className='footerIcons'>
                    <div className="Github">
                        <img src={Github} alt="github"/>
                    </div>
                    <div className="LinkedIn">
                        <img src={LinkedIn} alt="linkedIn"/>
                    </div>
                    <div className="GooglePlus">
                        <a id="email" href="mailto:demo@demo.com">
                            <img src={Twitter} alt="google plus"/>
                        </a>
                    </div>
                </div>
                <span className="spanFooter">Copyright © 2020 all rights reserved</span>
            </div>
        </footer>
    )

};
export default FooterMobile;