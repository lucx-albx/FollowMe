import React, { useState } from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faCamera, faGear, faPhone } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato per il menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Cambio lo stato del menu
    }

    return (
        <Menu isOpen={isMenuOpen} onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)} width={'280px'}>
            <NavLink className="menu-item" to={"/Informazioni"} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faCircleInfo} style={{ textDecoration: 'none', color: 'black' }} className='pointer'/>&nbsp;&nbsp;Informations
            </NavLink>
            <NavLink className="menu-item" to={"/Emergenza"} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faPhone} style={{ textDecoration: 'none', color: 'black' }} className='pointer'/>&nbsp;&nbsp;Contacts
            </NavLink>

            <NavLink className="menu-item" to={"/Permessi"} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faCamera} style={{ textDecoration: 'none', color: 'black' }} className='pointer'/>&nbsp;&nbsp;Camera permissions
            </NavLink>

            <NavLink className="menu-item" to={"/Impostazioni"} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faGear} style={{ textDecoration: 'none', color: 'black' }} className='pointer'/>&nbsp;&nbsp;Settings
            </NavLink>
        </Menu>
    )
}

export default SideBar