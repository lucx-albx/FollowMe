import React from 'react';
import './LoadingSpinner.css'
import logoLoader from './Image/logoLoader.png'

const LoadingSpinner = () => {
  return (
    <div className="div-loader fade-in">
    <img src={logoLoader} className="logo-loader"/>
      <p className="p-1">Benvenuto in</p>
      <p className="p-2">FollowMe</p>
      <p className="p-3">realizzato dalla 5L I.T.I.S. “G. Rivoira”</p>
    </div>
  );
};

export default LoadingSpinner;
