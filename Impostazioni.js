import React, { useContext, useEffect, useState } from 'react'
import './Impostazioni.css'
import CustomSwitch from './CustomSwitch'
import "flag-icons"
import {MdKeyboardArrowRight} from "react-icons/md"
import { Box, Modal } from '@mui/material'
import countryList from "country-list"
import { countries } from 'country-flag-icons'
import { language } from "./App";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '4px solid #319547',
    boxShadow: 24,
    p: 4,
    height: "90%",
    borderRadius: 4,
    overflowY: "auto",
    display: "block",
    width: "85%"
  };

const Impostazioni = () => {

    const [open, setOpen] = useState(false)
    const [flagList, setFlagList] = useState([])
    const lowecaseContries = countries.map((e) => e.toLowerCase());
    const lang = useContext(language)
    const [flag, setFlag] = [lang[0].lang, lang[0].setLang]

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        controllaStatoSwitch()
        // console.log(lang)

        let f = localStorage.getItem("followmeLang")

        if(f == null || f == undefined || lowecaseContries.indexOf(f) == undefined){
            setFlag("it");

        }else{
            setFlag(f);
        }
    }, [])

    const changeLang = (f) => {
        setFlag(f);
        localStorage.setItem("followmeLang", f);
        setOpen(false);
    
        // Creiamo una copia del flagList originale
        const updatedFlagList = [...flagList];
    
        // Troviamo l'indice dell'elemento selezionato
        const selectedIndex = lowecaseContries.indexOf(f);
    
        // Rimuoviamo l'elemento dalla sua posizione originale
        updatedFlagList.splice(selectedIndex, 1);
    
        // Inseriamo l'elemento nella prima posizione
        updatedFlagList.unshift(
            <div className='row border-bottom align-items-center' onClick={() => { changeLang(f) }} style={{ opacity: 1 }} key={selectedIndex}>
                <div className='col-3 my-3'>
                    <span className={`fi fi-${f}`} style={{ height: "50px", width: "40px" }}>
                    </span>
                </div>
                <div className='col-9 my-3'>
                    {countryList.getName(f)}
                </div>
            </div>
        );
    
        // Aggiorniamo lo stato con la nuova lista ordinata
        setFlagList(updatedFlagList);
    }

    useEffect(() => {
        let flags = [];
    
        lowecaseContries.forEach((e, i) => {
            if (countryList.getName(e) === undefined) {
                return;
            }
    
            let style = {
                opacity: 0.2
            }
    
            if (e === flag) {
                return;     // non appare 2 volte nella lista
            }
    
            flags.push(
                <div className='row border-bottom align-items-center' onClick={() => { changeLang(e) }} style={style} key={i}>
                    <div className='col-3 my-3'>
                        <span className={`fi fi-${e}`} style={{ height: "50px", width: "40px" }}>
                        </span>
                    </div>
                    <div className='col-9 my-3'>
                        {countryList.getName(e)}
                    </div>
                </div>
            )
        });
    
        // Trova l'indice dell'elemento selezionato
        const selectedIndex = lowecaseContries.indexOf(flag);
    
        // Sposta l'elemento selezionato in cima alla lista
        if (selectedIndex !== -1) {
            flags.splice(selectedIndex, 1);
            flags.unshift(
                <div className='row border-bottom align-items-center' onClick={() => { changeLang(flag) }} style={{ opacity: 1 }} key={selectedIndex}>
                    <div className='col-3 my-3'>
                        <span className={`fi fi-${flag}`} style={{ height: "50px", width: "40px" }}>
                        </span>
                    </div>
                    <div className='col-9 my-3'>
                        {countryList.getName(flag)}
                    </div>
                </div>
            );
        }
    
        setFlagList(flags);
    }, [flag]);    

    const controllaStatoSwitch =()=>{
        let flagAnimazioni = localStorage.getItem("animazioni")
        let switchAnimazioni = document.querySelector(".Animazioni")
        
        //console.log(flagAnimazioni === "true")

        if (flagAnimazioni === "true" || flagAnimazioni == null)
            switchAnimazioni.checked = true
        else 
            switchAnimazioni.checked = false
    }
    

    const sceltaAnimazione =(e)=>{
        let scelta = e.currentTarget.checked

        if (scelta === true)
            localStorage.setItem("animazioni", "true")
        else 
            localStorage.setItem("animazioni", "false")
        
    }

    const langClicked = () => {
        setOpen(true)
    }

    return (
        <>
            <div className='mt-6 centra-elementi'>
                <div className='row justify-content-center '>
                    <div className='box-elem col-11'>
                        <CustomSwitch text={"Animazioni: "} onClick={sceltaAnimazione} className={"Animazioni"}/>
                    </div>
                </div>
                <div className='row justify-content-center align-items-center'>
                    <div className='box-elem col-11 mt-3' style={{height: "84px"}}>
                        <div className='row align-items-center w-100' onClick={langClicked}>
                            <div className='col-4'>
                                <span className={`fi fi-${flag}`}></span>
                            </div>
                            <div className='col-4 d-flex justify-content-center align-items-center' style={{ fontSize: '15px'}}>
                                {countryList.getName(flag)}
                            </div>
                            <div className='col-4 d-flex justify-content-end'>
                                <MdKeyboardArrowRight style={{fontSize: 30}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* Includi il widget di Google Translate qui */}
                    <div id="google_translate_element"></div>
                    {flagList}
                </Box>
            </Modal>
        </>
    );
}

export default Impostazioni;