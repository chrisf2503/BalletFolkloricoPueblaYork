import {useState} from "react";
import { Link } from "react-router-dom";
import '../../CSS/navBar.css'
import Logo from '../../assets/mariachi_corazon_logo2.png'
function navBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='navContainer'>
                <div className='title'>
                    <Link to="/" className="logoHomeLink" aria-label="Go to homepage">
                        <img src={Logo} className="navLogo" alt="Mariachi Corazon de Mexico logo" />
                    </Link>
                </div>
                <div className="menu_button" onClick={toggleMenu}>
                    <button className="menu" >
                        {isOpen ? "Close" : "Menu"}
                    </button>
                </div>
                
                <div className={`linkContainer ${isOpen ? "active" : ""}`}>
                    <div className="links"><p>Galería</p></div>
                    <div className="links"><p>Information</p></div>
                    <div className="links" id='lastLink'><p>Contacto</p></div>
                </div>
                
            </div>
        </>
    )
}
export default navBar;
