import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faCamera } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center">
                    <div className='row MainNavbar'>
                        <NavLink to={"/"} style={{ textDecoration: 'none', color: '#319547' }} className='mainWord'>FollowMe</NavLink>
                    </div>
            </div>

            <Menu>
                <a className="menu-item" href="/">
                    <FontAwesomeIcon icon={faCircleInfo} className='pointer'/>&nbsp;&nbsp;Informazioni
                </a>

                <a className="menu-item" href="/">
                    <FontAwesomeIcon icon={faCamera} className='pointer'/>&nbsp;&nbsp;Permessi fotocamera
                </a>

                {/* <div className="div-copyright">
                    <p className="menu-item-copyright">
                        © 2023 Follow Me. Tutti i diritti riservati.
                    </p>
                </div> */}
            </Menu>
    </div>
    );
}

export default Navbar;
