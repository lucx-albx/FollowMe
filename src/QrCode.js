/*
- Errore installazione libreria react-qr-reader:

  npm i react-qr-reader
  npm ERR! code ERESOLVE
  npm ERR! ERESOLVE unable to resolve dependency tree
  npm ERR!
  npm ERR! While resolving: followme@0.1.0
  npm ERR! Found: react@18.2.0
  npm ERR! node_modules/react
  npm ERR!   react@"^18.2.0" from the root project
  npm ERR!
  npm ERR! Could not resolve dependency:
  npm ERR! peer react@"^16.8.0 || ^17.0.0" from react-qr-reader@3.0.0-beta-1
  npm ERR! node_modules/react-qr-reader
  npm ERR!   react-qr-reader@"*" from the root project
  npm ERR!
  npm ERR! Fix the upstream dependency conflict, or retry
  npm ERR! this command with --force or --legacy-peer-deps
  npm ERR! to accept an incorrect (and potentially broken) dependency resolution.


- Il pacchetto react-qr-reader richiede una versione di react compresa tra "^16.8.0" e "^17.0.0", ma nel progetto è presente react versione "18.2.0", che non è compatibile con queste richieste.

- Per risolvere --> installazione forzata con il flag --force:
  npm install react-qr-reader --force
*/

import './QrCode.css'
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QrCode = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  );
};

export default QrCode