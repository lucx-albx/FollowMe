import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faCamera } from '@fortawesome/free-solid-svg-icons'
import leftArrow from './Image/LeftArrow.png'

const Navbar = () => {
    const removeArrow =()=>{
        let frecciaTornaIndietro = document.querySelector(".posizione-freccia").classList
        frecciaTornaIndietro.add("invisibile")
    }

    return (
        <div>
            <NavLink to={"/Sicurezza"} onClick={removeArrow} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={leftArrow} className='posizione-freccia invisibile' onClick={removeArrow}/>
            </NavLink>

            <div className="row d-flex justify-content-center">
                <div className='row MainNavbar'>
                    <NavLink to={"/"} onClick={removeArrow} style={{ textDecoration: 'none', color: '#319547' }} className='mainWord'>FollowMe</NavLink>
                </div>
            </div>

            <Menu>
                <a className="menu-item" href="/">
                    <FontAwesomeIcon icon={faCircleInfo} className='pointer'/>&nbsp;&nbsp;Informazioni
                </a>

                <a className="menu-item" href="/">
                    <FontAwesomeIcon icon={faCamera} className='pointer'/>&nbsp;&nbsp;Permessi fotocamera
                </a>
            </Menu>
        </div>
    )
}

export default Navbar;
