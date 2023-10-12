import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faCamera, faGear, faPhone } from '@fortawesome/free-solid-svg-icons'
import leftArrow from './Image/LeftArrow.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato per il menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Cambio lo stato del menu
    }

    const removeArrow =()=>{
        let frecciaTornaIndietro = document.querySelector(".posizione-freccia").classList
        frecciaTornaIndietro.add("invisibile")
    }

    return (
        <div>
            <NavLink to={"/"} onClick={removeArrow} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={leftArrow} className='posizione-freccia invisibile' onClick={removeArrow}/>
            </NavLink>

            <div className="row justify-content-center">
                <div className='MainNavbar'>
                    <NavLink to={"/"} onClick={removeArrow} style={{ textDecoration: 'none', color: '#319547' }} className='mainWord'>FollowMe</NavLink>
                </div>
            </div>

            
        </div>
    )
}

export default Navbar;
