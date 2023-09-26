import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='row MainNavbar'>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 d-flex align-items-center justify-content-center">
                <label className="burger">
                    <input type="checkbox" id="burger"/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <NavLink to={"/"} style={{ textDecoration: 'none', color: '#319547' }} className='mainWord col-xl-7 col-lg-7 col-md-7 col-sm-7 col-6 d-flex align-items-center justify-content-center'>FollowMe</NavLink>
        </div>
    )
}

export default Navbar
