import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="row d-flex justify-content-center row-navbar">
            <div className='row MainNavbar'>
            <label className="burger">
                <input type="checkbox" id="burger" />
                <span></span>
                <span></span>
                <span></span>
            </label>
            <NavLink to={"/"} style={{ textDecoration: 'none', color: '#319547' }} className='mainWord'>FollowMe</NavLink>
        </div>
        </div>
    );
}

export default Navbar;
