import React, { useState } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  window.scrollTo(0,0)

  return (
    <div className='MainHome'>
      <NavLink to={"/QrCode"} style={{ textDecoration: 'none', color: '#319547' }}>
        <div className="BorderSos pulse">
          <div className='MainSos text-center'>
            <p>QR</p> 
            <p>Press</p> 
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
