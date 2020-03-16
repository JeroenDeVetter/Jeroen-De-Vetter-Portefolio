import React, {useEffect} from "react";
import NavMobile from "../component/navMobile";
import FooterMobile from "../component/footerMobile";
import Gsap from 'gsap';

const Home = () => {

    useEffect(() =>{
        let tl = Gsap.timeline();
        window.onload = () => {
         tl.staggerFrom(".textHome", 0.4, {x:-300, y:100, opacity:0 , stagger:0.01}, 0);
         tl.fromTo('.spans', 0.5, {opacity:0}, {opacity:1}, 0.8);
         tl.fromTo(".ball", 1, {y:-500}, {y:0, ease:"bounce.out"} , 0.2);
     }
    },[]);

    return (
        <div className="App">
            <header className="App-header">
                <NavMobile/>
            </header>

                 <div className="pageContent">
                     <div className="content">
                         <div className="homePara1">
                             <div className="textHome">Hello</div>
                             <div className="ball"> </div>
                         </div>
                         <div className="homePara2">
                             <div className="textHome">I am</div>
                             <div className="spanContainerHome">
                                 <span className="spans span1">Front end and back end</span>
                                 <span className="spans">Developer located in Belgium</span>
                             </div>
                         </div>
                         <div className="homePara3">
                             <div className="textHome">Jeroen</div>
                         </div>
                     </div>
                 </div>

            <FooterMobile/>
        </div>
    )
};
export default Home;