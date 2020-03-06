import React, {useState} from 'react';
import JeroenLogo from '../assets/img/JeroenDeVetterLogo.svg';
import HamburgerMenu from '../assets/img/Hamburger_Menu.svg';
import DropDown from "./dropdown";
function NavMobile() {

    const [navDisplay, setNavDisplay] = useState('hidden');
    const [opacity, setOpacity] = useState(0);

    return (
        <div className="Navbar">
            <nav>
                <div className='icon'>
                    <img src={JeroenLogo} alt="My logo"/>
                </div>

                <div className="hamburgerMenu">
                    <img className="Menu" src={HamburgerMenu} alt="hamburger menu" onClick={() => {
                        let display = navDisplay;
                        if( display === "hidden") {
                            setNavDisplay("visible");
                            setOpacity(1);
                        }else {
                            setNavDisplay("hidden");
                            setOpacity(0);
                        }
                    }
                    }/>
                </div>
            </nav>
            <DropDown navDisplay={navDisplay} opicity={opacity}/>
        </div>
    )
}

export default NavMobile;
