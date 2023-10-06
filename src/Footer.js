import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faQrcode, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const EmIcon = <FontAwesomeIcon icon={faTowerBroadcast} className='pointer'/>
    const QrIcon = <FontAwesomeIcon icon={faQrcode} className='pointer'/>
    const SiIcon = <FontAwesomeIcon icon={faLocationArrow} className='pointer'/>

    const [icone, setIcone] = useState({
        em: [EmIcon, "ss"],
        qr: [QrIcon, "ss"],
        si: [SiIcon, "ss"]
    })

    // Posizione corrente ( hook useLocation() )
    const location = useLocation();

    const footerRef = useRef(null);

    const sezione = (cls) => {
        //serve per togliere la freccia dalla navbar
        if (cls !== "si"){
            let frecciaTornaIndietro = document.querySelector(".posizione-freccia").classList
            frecciaTornaIndietro.add("invisibile")
        }

        const nuoveIcone = {
            em: cls === 'em' ? [EmIcon, "ns"] : [EmIcon, "ss"],
            qr: cls === 'qr' ? [QrIcon, "ns"] : [QrIcon, "ss"],
            si: cls === 'si' ? [SiIcon, "ns"] : [SiIcon, "ss"],
        };

        setIcone(nuoveIcone);
    };

    useEffect(() => {
        // Controllo dela posizione corrente per impostare l'icona
        if (location.pathname === '/QrCode') {
            sezione('qr');
        } else if (location.pathname === '/Sos') {
            sezione('em');
        } else if (location.pathname === '/' || location.pathname === '/Percorso') {
            sezione('si');
        } else {
            sezione('rest');
        }
    }, [location.pathname]);

    return (
        <div className='MainFooter' ref={footerRef}>
            <div className='FooterIcon'>
                <NavLink to={"/QrCode"} onClick={()=>sezione('qr')} style={{ textDecoration: 'none', color: '#319547' }} className={icone.qr[1] === "ns" ? 'SezioneImpostata' : 'iconaStyle'}>
                    {icone.qr[0]}
                </NavLink>

                <NavLink to={"/"} onClick={()=>sezione('si')} style={{ textDecoration: 'none', color: '#319547' }} className={icone.si[1] === "ns" ? 'SezioneImpostata' : 'iconaStyle'}>
                    {icone.si[0]}
                </NavLink>

                <NavLink to={"/Sos"} onClick={()=>sezione('em')} style={{ textDecoration: 'none', color: '#319547' }} className={icone.em[1] === "ns" ? 'SezioneImpostataH' : 'iconaStyleH'}>
                    {icone.em[0]}
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;
