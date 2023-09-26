import React, { useState } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='MainHome'>
      <NavLink to={"/QrCode"}>
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
