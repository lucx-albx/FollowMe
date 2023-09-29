import React from 'react';
import './Emergenza.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Emergenza = () => {
  const handleCall112 = () => {
    window.location.href = 'tel:112';
  };

  return (
    <div>
      <div className='MainEm'>
        <div className='MainSosCall text-center pointer pulse' onClick={handleCall112}>
          <FontAwesomeIcon icon={faPhone} />&nbsp;
          <p className='p-sos' >112</p>
        </div>
      </div>

      <div className="div-sos-contatti">
        <p className='p-sos-contatti'>
          I.T.I.S. “G. Rivoira” - Verzuolo (CN)<br />
          Tel: 017543625<br />
          Mail: CNIS014001@istruzione.it
        </p>
      </div>
    </div>
  );
}

export default Emergenza;
