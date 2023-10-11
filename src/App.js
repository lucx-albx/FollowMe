import React from 'react';
import 'flag-icons/css/flag-icons.min.css';   // https://www.npmjs.com/package/flag-icons
import { countries } from 'country-flag-icons'; // lista di tutti gli stati
import countryList from 'country-list';

const App = () => {
  // Converte i codici dei paesi in minuscolo
  const lowercaseCountries = countries.map(code => code.toLowerCase());
  const flagChoose = 'it'
  const flagRows = [];
  const rowSize = 4; // Numero di bandiere per riga

  const handleFlagClick = (code) => {
    alert(countryList.getName(code))
  };

  for (let i = 0; i < lowercaseCountries.length; i += rowSize) {
    const rowFlags = lowercaseCountries.slice(i, i + rowSize);

    flagRows.push(
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px'
        }}
        key={i}
      >
        {rowFlags.map((code, index) => (
          <div
            style={{
              marginRight: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '25vw'
            }}
            key={index}
          >
            <div onClick={() => handleFlagClick(code)}>
              <span
                className={`fi fi-${code}`}
                style={{
                  height: '50px',
                  width: '50px',
                  opacity: code === flagChoose ? '1' : '0.2'
                }}
              ></span>
            </div>
            <div style={{fontSize: '12px', textAlign: 'center', color: 'white', opacity: code === flagChoose ? '1' : '0.2'}}>{countryList.getName(code,'it')+'('+code+')'}</div>
          </div>
        ))}
      </div>
    );
  }

  return <div style={{ backgroundColor: '#192935' }}>{flagRows}</div>;
}

export default App;
