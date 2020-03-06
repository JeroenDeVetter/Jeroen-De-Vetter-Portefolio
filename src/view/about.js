import React from "react";
import NavMobile from "../component/navMobile";
import FooterMobile from "../component/footerMobile";

const about = () => {

    return (
        <div className="App">
            <header className="App-header">
                <NavMobile/>
            </header>

            <div className="pageContent">
                <h1>About</h1>
            </div>

            <FooterMobile/>
        </div>
    )
};
export default about;