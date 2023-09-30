import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  window.scrollTo(0,0)

  return (
    <div className='MainHome'>
      <NavLink to={"/QrCode"} style={{ textDecoration: 'none', color: '#319547' }}>
          <div className='MainSos text-center pulse'>
            <p style={{fontWeight: 'bold'}}>SOS</p> 
            <p>Press</p> 
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
