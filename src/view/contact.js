import React from "react";
import NavMobile from "../component/navMobile";
import FooterMobile from "../component/footerMobile";

const contact = () => {

    return (
        <div className="App">
            <header className="App-header">
                <NavMobile/>
            </header>

            <div className="pageContent">
                <h1>Contact</h1>
            </div>

            <FooterMobile/>
        </div>
    )
};
export default contact;