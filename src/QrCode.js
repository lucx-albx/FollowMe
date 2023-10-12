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

- Quando si installano i moduli da zero bisogna usare --force (esempio: npm install --force)
*/

import './QrCode.css'
import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import qrInfo from './Image/QrInfo.png'

const QrCode = () => {
    window.scrollTo(0, 0);
	const navigate = useNavigate();

    const openLink = (url) => {
        window.location.href = url;
        //console.log(url);
    }

	const [permissionCamera, setPermissionCamera] = useState(null);

	const checkCameraPermission = async () => {
	  try {
		const cameraPermission = await navigator.permissions.query({ name: 'camera' });
		//console.log('Camera permission status:', cameraPermission.state);
  
		setPermissionCamera(cameraPermission.state); // Aggiorna lo stato con il valore corrente
  
		if (cameraPermission.state === 'denied') {
		  //console.log('Camera blocked');
		  navigate("/Permessi")
		  return; // Esci dalla ricorsione se la permissionCamera è 'denied'
		}

		if (cameraPermission.state === 'granted') {
			//console.log('Camera granted');
			return; // Esci dalla ricorsione se la permissionCamera è 'granted'
		  }
  
		// Se la permissionCamera non è 'denied', esegui nuovamente la funzione dopo un ritardo
		setTimeout(checkCameraPermission, 500); // Ritardo di 1 secondo (puoi impostare un valore diverso)
	  } catch (error) {
		//console.error('Error checking camera permission:', error);
	  }
	};
  
	useEffect(() => {
	  checkCameraPermission(); // Avvia il controllo delle autorizzazioni della fotocamera all'avvio della pagina
	}, []);

    return (
        <div className='row mt-qrcode'>
			{ isMobile ? 
				<div className="col-12 MainQrCode mt-6">
					<QrReader
						constraints = {{
							facingMode: { exact: "environment" }
						}}
						onResult={(result) => {
							if (!!result) {
								openLink(result?.text)
							}
						}}
					/> 
				</div>

				:

				(	
					<div className='col-12 styleNoQr mt-6'>
						<img src={qrInfo} class="img-fluid imgNoQr"/>
						<bold className='text-center black-title-qr' style={{marginTop:'30px'}}>Usa lo scanner da telefono</bold>
						<p className='p-uscita'>
							Ci dispiace, ma per motivi logistici abbiamo deciso di non far utilizzare 
							lo scanner di QR Code sul computer. Recati sul tuo dispositivo 
							mobile per utilizzare lo scanner.
						</p>
					</div>
				)
			}
		</div>
	)
}

export default QrCode;