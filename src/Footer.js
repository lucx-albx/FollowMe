import React, { useState } from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
//versione bianca
import EmIconW from './Image/Emergenza.png'
import QrIconW from './Image/Qr.png'
import SiIconW from './Image/Sicurezza.png'
//versione nera
import EmIconB from './Image/Emergenza2.png'
import QrIconB from './Image/Qr2.png'
import SiIconB from './Image/Sicurezza2.png'

const Footer = () => {
    const [EmIcon, setEmIcon] = useState(EmIconW)
    const [QrIcon, setQrIcon] = useState(QrIconW)
    const [SiIcon, setSiIcon] = useState(SiIconW)
    const [LastSaved, setLastSaved] = useState(null)

    const sezione =(cls)=>{
        let icona = document.querySelector(cls)
        icona.classList.add("SezioneImpostata")

        if (cls === ".iem" && icona.classList.contains("SezioneImpostata")){
            setEmIcon(EmIconB)
            setQrIcon(QrIconW)
            setSiIcon(SiIconW)
        } else if (cls === ".iqr" && icona.classList.contains("SezioneImpostata")){
            setEmIcon(EmIconW)
            setQrIcon(QrIconB)
            setSiIcon(SiIconW)
        } else if (cls === ".isi" && icona.classList.contains("SezioneImpostata")){
            setEmIcon(EmIconW)
            setQrIcon(QrIconW)
            setSiIcon(SiIconB)
        }

        if (LastSaved !== null)
            LastSaved.classList.remove("SezioneImpostata")

        setLastSaved(icona)
    }

    return (
        <div className='MainFooter'>
            <div className='FooterIcon'>
                <NavLink to={"/Emergenza"} onClick={()=>sezione(".iem")} className='iem'>
                    <img src={EmIcon} alt="Icona Emergenza" className='pointer'/>
                </NavLink>

                <NavLink to={"/QrCode"} onClick={()=>sezione(".iqr")} className='iqr'>
                    <img src={QrIcon} alt="Icona Qr code" className='pointer'/>
                </NavLink>

                <NavLink to={"/Sicurezza"} onClick={()=>sezione(".isi")} className='isi'>
                    <img src={SiIcon} alt="Iconda sicurezza" className='pointer'/>
                </NavLink>
            </div>
        </div>
    )
}

export default Footer