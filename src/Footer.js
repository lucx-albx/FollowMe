import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';
import { NavLink, useLocation } from 'react-router-dom';

import EmIconW from './Image/Emergenza.png';
import QrIconW from './Image/Qr.png';
import SiIconW from './Image/Sicurezza.png';

import EmIconB from './Image/Emergenza2.png';
import QrIconB from './Image/Qr2.png';
import SiIconB from './Image/Sicurezza2.png';

const Footer = () => {
    const [icone, setIcone] = useState({
        em: EmIconW,
        qr: QrIconW,
        si: SiIconW,
    });

    // Posizione corrente ( hook useLocation() )
    const location = useLocation();

    const footerRef = useRef(null);

    const sezione = (cls) => {
        const nuoveIcone = {
            em: cls === 'em' ? EmIconB : EmIconW,
            qr: cls === 'qr' ? QrIconB : QrIconW,
            si: cls === 'si' ? SiIconB : SiIconW,
        };

        setIcone(nuoveIcone);
    };

    const handleOutsideClick = (event) => {
        if (footerRef.current && !footerRef.current.contains(event.target)) {
            // Clic al di fuori del Footer, reimposta l'immagine
            setIcone({
                em: EmIconW,
                qr: QrIconW,
                si: SiIconW,
            });
        }
    };

    useEffect(() => {
        // Gestore di eventi per il clic al di fuori del Footer
        document.addEventListener('mousedown', handleOutsideClick);

        // Pulizia del gestore di eventi quando il componente si smonta
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        // Controllo dela posizione corrente per impostare l'icona
        if (location.pathname === '/QrCode') {
            sezione('qr');
        } else if (location.pathname === '/Emergenza') {
            sezione('em');
        } else if (location.pathname === '/Sicurezza') {
            sezione('si');
        }
    }, [location.pathname]);

    return (
        <div className='MainFooter' ref={footerRef}>
            <div className='FooterIcon'>
                <NavLink to={"/Emergenza"} onClick={() => sezione('em')} className={icone.em === EmIconB ? 'em SezioneImpostata' : 'em'}>
                    <img src={icone.em} alt="Icona Emergenza" className='pointer' />
                </NavLink>

                <NavLink to={"/QrCode"} onClick={() => sezione('qr')} className={icone.qr === QrIconB ? 'qr SezioneImpostata' : 'qr'}>
                    <img src={icone.qr} alt="Icona Qr code" className='pointer' />
                </NavLink>

                <NavLink to={"/Sicurezza"} onClick={() => sezione('si')} className={icone.si === SiIconB ? 'si SezioneImpostata' : 'si'}>
                    <img src={icone.si} alt="Icona sicurezza" className='pointer' />
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;
