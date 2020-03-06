import React from "react";
import NavMobile from "../component/navMobile";
import FooterMobile from "../component/footerMobile";

const project = () => {

    return (
        <div className="App">
            <header className="App-header">
                <NavMobile/>
            </header>

            <div className="pageContent">
                <h1>Projects</h1>
            </div>

            <FooterMobile/>
        </div>
    )
};
export default project;