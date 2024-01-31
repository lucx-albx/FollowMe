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
            "id": "italian",
            "nome": "Italiano",
            "code": "it"
        },
        {
            "id": "english",
            "nome": "English",
            "code": "gb-eng"
        },
        {
            "id": "albanian",
            "nome": "albanian",
            "code": "al"
        },
        {
            "id": "arabic",
            "nome": "بالعربية",
            "code": "ae"
        },
        {
            "id": "armenian",
            "nome": "հայերեն",
            "code": "am"
        },
        {
            "id": "bosnian",
            "nome": "bosanski",
            "code": "ba"
        },
        {
            "id": "bengali",
            "nome": "বাংলা",
            "code": "bd"
        },
        {
            "id": "bulgarian",
            "nome": "български",
            "code": "bg"
        },
        {
            "id": "chinese_simplified",
            "nome": "简体中文",
            "code": "cn"
        },
        {
            "id": "chinese_traditional",
            "nome": "繁體中文",
            "code": "cn"
        },
        {
            "id": "croatian",
            "nome": "Hrvatski",
            "code": "hr"
        },
        {
            "id": "danish",
            "nome": "dansk",
            "code": "dk"
        },
        {
            "id": "dutch",
            "nome": "Nederlands",
            "code": "nl"
        },
        {
            "id": "estonian",
            "nome": "eesti keel",
            "code": "ee"
        },
        {
            "id": "filipino",
            "nome": "Pilipino",
            "code": "ph"
        },
        {
            "id": "french",
            "nome": "Français",
            "code": "fr"
        },
        {
            "id": "german",
            "nome": "Deutsch",
            "code": "de"
        },
        {
            "id": "greek",
            "nome": "Ελληνικά",
            "code": "gr"
        },
        {
            "id": "hebrew",
            "nome": "היברית",
            "code": "il"
        },
        {
            "id": "hungarian",
            "nome": "Magyar",
            "code": "hu"
        },
        {
            "id": "indonesian",
            "nome": "IndonesiaName",
            "code": "id"
        },
        {
            "id": "irish",
            "nome": "Gaeilge",
            "code": "ie"
        },
        {
            "id": "japanese",
            "nome": "日本語",
            "code": "jp"
        },
        {
            "id": "kannada",
            "nome": "ಕನ್ನಡ್Name",
            "code": "in"
        },
        {
        "id": "korean",
        "nome": "한어",
        "code": "kp"
        },
        {
            "id": "latvian",
            "nome": "latviešu",
            "code": "lv"
        },
        {
            "id": "luxembourgish",
            "nome": "LëtzebuergeschName",
            "code": "lu"
        },
        {
            "id": "macedonian",
            "nome": "Македонски",
            "code": "mk"
        },
        {
            "id": "nepali",
            "nome": "नेपालीName",
            "code": "np"
        },
        {
            "id": "norwegian",
            "nome": "Norge",
            "code": "no"
        },
        {
            "id": "polish",
            "nome": "Polski",
            "code": "pl"
        },
        {
            "id": "portuguese",
            "nome": "Português",
            "code": "pt"
        },
        {
            "id": "romanian",
            "nome": "Română",
            "code": "ro"
        },
        {
            "id": "russian",
            "nome": "Русский язык",
            "code": "ru"
        },
        {
            "id": "slovak",
            "nome": "Slovenská",
            "code": "sk"
        },
        {
            "id": "slovene",
            "nome": "slovenščina",
            "code": "si"
        },
        {
            "id": "somali",
            "nome": "Soomaali",
            "code": "so"
        },
        {
            "id": "spanish",
            "nome": "español",
            "code": "es"
        },
        {
        "id": "swedish",
        "nome": "Svenska",
        "code": "se"
        },
        {
            "id": "tatar",
            "nome": "Татар",
            "code": "ru"
        },
        {
            "id": "turkish",
            "nome": "Türkçe",
            "code": "am"
        },
        {
            "id": "ukrainian",
            "nome": "УкраїнськаName",
            "code": "ua"
        },
        {
            "id": "welsh",
            "nome": "Cymraeg",
            "code": "gb-wls"
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
        
        if (flagAnimazioni === "true"){
            switchAnimazioni.checked = true
        } else if(flagAnimazioni === "false" || flagAnimazioni == null) {
            switchAnimazioni.checked = false
            localStorage.setItem("animazioni", "false")
        }
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
                        <CustomSwitch text={"Animation: "} onClick={sceltaAnimazione} className={"Animazioni"}/>
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