import React, { useContext, useEffect, useState } from 'react'
import './Impostazioni.css'
import CustomSwitch from './CustomSwitch'
import "flag-icons"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Box, Modal } from '@mui/material'
import { language } from "./App"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // boxShadow: '3px 3px 25px 10px #BFBFBF',
    p: 4,
    height: "90%",
    borderRadius: 4,
    overflowY: "auto",
    display: "block",
    width: "85%"
}

const Impostazioni = () => {

    const [open, setOpen] = useState(false)
    const [flagList, setFlagList] = useState([])
    // const lowecaseContries = countries.map((e) => e.toLowerCase());
    const lang = useContext(language)
    const [flag, setFlag] = useState(lang[0].lang);
    // const selectedIndex = possibleLanguage.findIndex(lang => lang.nome === f);
    const [possibleLanguage, setPossibleLanguage] = useState([
        {
            "id": "Italiano",
            "nome": "Italiano",
            "code": "it"
        },
        {
            "id": "English",
            "nome": "English",
            "code": "gb"
        },
        {
            "id": "Albanian",
            "nome": "Albanian",
            "code": "al"
        },
        {
            "id": "Arabic",
            "nome": "بالعربية",
            "code": "ae"
        },
        {
            "id": "Armenian",
            "nome": "հայերեն",
            "code": "am"
        },
        {
            "id": "Bosnian",
            "nome": "Bosanski",
            "code": "ba"
        },
        {
            "id": "Bengali",
            "nome": "বাংলা",
            "code": "bd"
        },
        {
            "id": "Bulgarian",
            "nome": "български",
            "code": "bg"
        },
        {
            "id": "Chinese simplified",
            "nome": "简体中文",
            "code": "cn"
        },
        {
            "id": "Chinese traditional",
            "nome": "繁體中文",
            "code": "cn"
        },
        {
            "id": "Croatian",
            "nome": "Hrvatski",
            "code": "hr"
        },
        {
            "id": "Danish",
            "nome": "Dansk",
            "code": "dk"
        },
        {
            "id": "Dutch",
            "nome": "Nederlands",
            "code": "nl"
        },
        {
            "id": "Estonian",
            "nome": "Eesti keel",
            "code": "ee"
        },
        {
            "id": "Filipino",
            "nome": "Pilipino",
            "code": "ph"
        },
        {
            "id": "French",
            "nome": "Français",
            "code": "fr"
        },
        {
            "id": "German",
            "nome": "Deutsch",
            "code": "de"
        },
        {
            "id": "Greek",
            "nome": "Ελληνικά",
            "code": "gr"
        },
        {
            "id": "Hebrew",
            "nome": "היברית",
            "code": "il"
        },
        {
            "id": "Hungarian",
            "nome": "Magyar",
            "code": "hu"
        },
        {
            "id": "Indonesian",
            "nome": "IndonesiaName",
            "code": "id"
        },
        {
            "id": "Irish",
            "nome": "Gaeilge",
            "code": "ie"
        },
        {
            "id": "Japanese",
            "nome": "日本語",
            "code": "jp"
        },
        {
            "id": "Kannada",
            "nome": "ಕನ್ನಡ್Name",
            "code": "in"
        },
        {
        "id": "Korean",
        "nome": "한어",
        "code": "kp"
        },
        {
            "id": "Latvian",
            "nome": "Latviešu",
            "code": "lv"
        },
        {
            "id": "Luxembourgish",
            "nome": "LëtzebuergeschName",
            "code": "lu"
        },
        {
            "id": "Macedonian",
            "nome": "Македонски",
            "code": "mk"
        },
        {
            "id": "Nepali",
            "nome": "नेपालीName",
            "code": "np"
        },
        {
            "id": "Norwegian",
            "nome": "Norge",
            "code": "no"
        },
        {
            "id": "Polish",
            "nome": "Polski",
            "code": "pl"
        },
        {
            "id": "Portuguese",
            "nome": "Português",
            "code": "pt"
        },
        {
            "id": "Romanian",
            "nome": "Română",
            "code": "ro"
        },
        {
            "id": "Russian",
            "nome": "Русский язык",
            "code": "ru"
        },
        {
            "id": "Slovak",
            "nome": "Slovenská",
            "code": "sk"
        },
        {
            "id": "Slovene",
            "nome": "Slovenščina",
            "code": "si"
        },
        {
            "id": "Somali",
            "nome": "Soomaali",
            "code": "so"
        },
        {
            "id": "Spanish",
            "nome": "Español",
            "code": "es"
        },
        {
        "id": "Swedish",
        "nome": "Svenska",
        "code": "se"
        },
        {
            "id": "Tatar",
            "nome": "Татар",
            "code": "ru"
        },
        {
            "id": "Turkish",
            "nome": "Türkçe",
            "code": "am"
        },
        {
            "id": "Ukrainian",
            "nome": "УкраїнськаName",
            "code": "ua"
        }
    ])

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        controllaStatoSwitch()

        let f = localStorage.getItem("followmeLang")

        if(f == null || f == undefined || possibleLanguage.indexOf(f) == undefined){
            setFlag("italian")
        } else {
            setFlag(f)
        }
    }, [])

    const changeLang = (f) => {

        setFlag(f);
        localStorage.setItem("followmeLang", f);
        setOpen(false);
    
        // Creiamo una copia del flagList originale
        const updatedFlagList = [...flagList];
    
        // Troviamo l'indice dell'elemento selezionato
        const selectedIndex = possibleLanguage.indexOf(f);
    
        // Rimuoviamo l'elemento dalla sua posizione originale
        updatedFlagList.splice(selectedIndex, 1);
    
        // Inseriamo l'elemento nella prima posizione
        updatedFlagList.unshift(
            <div className='row align-items-center' onClick={() => { changeLang(f) }} style={{ opacity: 1 }} key={selectedIndex}>
                <div className='col-3 my-3'>
                    <span className={`fi fi-${f.code}`} style={{ height: "50px", width: "40px" }}></span>
                </div>
                <div className='col-9 my-3'>
                    {flag}
                </div>
            </div>
        );
    
        // Aggiorniamo lo stato con la nuova lista ordinata
        setFlagList(updatedFlagList);
    }

    useEffect(() => {
        let flags = [];
    
        const selectedIndex = possibleLanguage.findIndex(lang => lang.id === flag);
    
        possibleLanguage.forEach((e, i) => {
            let style = {
                opacity: 0.2
            }
    
            if (e.id === flag) {
                return;
            }
    
            flags.push(
                <a href={`javascript:translate.changeLanguage('${e.id}')`} key={i} style={{textDecoration:'none', color:'black'}}>
                    <div className='row border-bottom align-items-center' onClick={() => { changeLang(e.id) }} style={style}>
                        <div className='col-3 my-3'>
                            <span className={`fi fi-${e.code}`} style={{ height: "50px", width: "40px" }}>
                            </span>
                        </div>
                        <div className='col-9 my-3'>
                            {e.id}
                        </div>
                    </div>
                </a>
            );
        });
    
        if (selectedIndex !== -1) {
            flags.unshift(
                <div className='row border-bottom align-items-center' onClick={() => { changeLang(flag) }} style={{ opacity: 1 }} key={selectedIndex}>
                    <div className='col-3 my-3'>
                        <span className={`fi fi-${(possibleLanguage.find(lang => lang.id === flag) || {}).code || ''}`} style={{ height: "50px", width: "40px" }}>
                        </span>
                    </div>
                    <div className='col-9 my-3'>
                        {flag}
                    </div>
                </div>
            );
        }
    
        setFlagList(flags);
    }, [flag]);  

    const controllaStatoSwitch =()=>{
        let flagAnimazioni = localStorage.getItem("animazioni")
        let switchAnimazioni = document.querySelector(".Animazioni")
        
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
                    <div className='box-elem col-11 mt-3 d-flex justify-content-center align-items-center' style={{height: "84px"}}>
                        <div className='row align-items-center w-100' onClick={langClicked} >
                            <div className='col-4'>
                                <span className={`fi fi-${(possibleLanguage.find(lang => lang.id === flag) || {}).code || ''}`}></span> 
                            </div>
                            <div className='col-4 d-flex justify-content-center align-items-center' style={{ fontSize: '17px'}}>
                                {flag}
                            </div>
                            <div className='col-4 d-flex justify-content-end'>
                                <MdKeyboardArrowRight style={{fontSize: 30}}/>
                            </div>
                            <div className='col'>
                                <div id="google_translate_element"></div>
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
                className='translateSelectLanguage'
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