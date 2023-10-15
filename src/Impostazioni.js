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
            "id": "german",
            "nome": "Deutsch",
            "code": "de"
        },
        {
            "id": "corsican",
            "nome": "Corsu",
            "code": "fr"
        },
        {
            "id": "guarani",
            "nome": "guarani",
            "code": "py"
        },
        {
            "id": "kinyarwanda",
            "nome": "Kinyarwanda",
            "code": "cg"
        },
        {
            "id": "hausa",
            "nome": "Hausa",
            "code": "ng"
        },
        {
            "id": "norwegian",
            "nome": "Norge",
            "code": "no"
        },
        {
            "id": "dutch",
            "nome": "Nederlands",
            "code": "nl"
        },
        {
            "id": "yoruba",
            "nome": "Yoruba",
            "code": "ng"
        },
        {
            "id": "english",
            "nome": "English",
            "code": "gb-eng"
        },
        {
            "id": "gongen",
            "nome": "गोंगेन हें नांव",
            "code": "jp"
        },
        {
            "id": "latin",
            "nome": "Latina",
            "code": "va"
        },
        {
            "id": "nepali",
            "nome": "नेपालीName",
            "code": "np"
        },
        {
            "id": "french",
            "nome": "Français",
            "code": "fr"
        },
        {
            "id": "czech",
            "nome": "čeština",
            "code": "cz"
        },
        {
            "id": "georgiano",
            "nome": "ჯორჯიანიNome",
            "code":"ge"
        },
        {
            "id": "russian",
            "nome": "Русский язык",
            "code": "ru"
        },
        {
            "id": "chinese_simplified",
            "nome": "简体中文",
            "code": "cn"
        },
        {
            "id": "persian",
            "nome": "فارسی",
            "code": "ir"
        },
        {
            "id": "bhojpuri",
            "nome": "भोजपुरी",
            "code": "in"
        },
        {
            "id": "hindi",
            "nome": "हिंदी",
            "code": "in"
        },
        {
            "id": "belarusian",
            "nome": "беларуски",
            "code": "by"
        },
        {
            "id": "swahili",
            "nome": "Kiswahili",
            "code": "ke"
        },
        {
            "id": "icelandic",
            "nome": "ÍslandName",
            "code": "is"
        },
        {
            "id": "yiddish",
            "nome": "ייַדיש",
            "code": "il"
        },
        {
            "id": "twi",
            "nome": "tur",
            "code": "gh"
        },
        {
            "id": "irish",
            "nome": "Gaeilge",
            "code": "ie"
        },
        {
            "id": "gujarati",
            "nome": "ગુજરાતી",
            "code": "in"
        },
        {
            "id": "khmer",
            "nome": "ខ្មែរKCharselect unicode block name",
            "code": "vn"
        },
        {
            "id": "slovak",
            "nome": "Slovenská",
            "code": "sk"
        },
        {
            "id": "hebrew",
            "nome": "היברית",
            "code": "il"
        },
        {
            "id": "kannada",
            "nome": "ಕನ್ನಡ್Name",
            "code": "in"
        },
        {
            "id": "hungarian",
            "nome": "Magyar",
            "code": "hu"
        },
        {
            "id": "tamil",
            "nome": "தாமில்",
            "code": "lk"
        },
        {
            "id": "arabic",
            "nome": "بالعربية",
            "code": "ae"
        },
        {
            "id": "bengali",
            "nome": "বাংলা",
            "code": "bd"
        },
        {
            "id": "azerbaijani",
            "nome": "Azərbaycan",
            "code": "az"
        },
        {
            "id": "samoan",
            "nome": "lifiava",
            "code": "as"
        },
        {
            "id": "afrikaans",
            "nome": "Suid-Afrikaanse Dutch taal",
            "code": "za"
        },
        {
            "id": "indonesian",
            "nome": "IndonesiaName",
            "code": "id"
        },
        {
            "id": "danish",
            "nome": "dansk",
            "code": "dk"
        },
        {
            "id": "shona",
            "nome": "Shona",
            "code": "zw"
        },
        {
            "id": "bambara",
            "nome": "Bamanankan",
            "code": "bg"
        },
        {
            "id": "lithuanian",
            "nome": "Lietuva",
            "code": "lt"
        },
        {
            "id": "vietnamese",
            "nome": "Tiếng Việt",
            "code": "vn"
        },
        {
            "id": "maltese",
            "nome": "Malti",
            "code": "mt"
        },
        {
            "id": "turkmen",
            "nome": "Türkmençe",
            "code": "tm"
        },
        {
            "id": "assamese",
            "nome": "অসমীয়া",
            "code": "in"
        },
        {
            "id": "catalan",
            "nome": "català",
            "code": "es-ct"
        },
        {
            "id": "singapore",
            "nome": "සිංගාපුර්",
            "code": "sg"
        },
        {
            "id": "cebuano",
            "nome": "Cebuano",
            "code": "ph"
        },
        {
            "id": "scottish-gaelic",
            "nome": "Gàidhlig na h-Alba",
            "code": "gb-sct"
        },
        {
            "id": "sanskrit",
            "nome": "Sanskrit",
            "code": "bd"
        },
        {
            "id": "polish",
            "nome": "Polski",
            "code": "pl"
        },
        {
            "id": "galician",
            "nome": "galego",
            "code": "es-ga"
        },
        {
            "id": "latvian",
            "nome": "latviešu",
            "code": "lv"
        },
        {
            "id": "ukrainian",
            "nome": "УкраїнськаName",
            "code": "ua"
        },
        {
            "id": "tatar",
            "nome": "Татар",
            "code": "ru"
        },
        {
            "id": "welsh",
            "nome": "Cymraeg",
            "code": "gb-wls"
        },
        {
            "id": "japanese",
            "nome": "日本語",
            "code": "jp"
        },
        {
            "id": "filipino",
            "nome": "Pilipino",
            "code": "ph"
        },
        {
            "id": "aymara",
            "nome": "Aymara",
            "code": "bo"
        },
        {
            "id": "lao",
            "nome": "ກະຣຸນາ",
            "code": "la"
        },
        {
            "id": "telugu",
            "nome": "తెలుగుQFontDatabase",
            "code": "in"
        },
        {
            "id": "romanian",
            "nome": "Română",
            "code": "ro"
        },
        {
            "id": "haitian_creole",
            "nome": "Kreyòl ayisyen",
            "code": "ht"
        },
        {
            "id": "dogrid",
            "nome": "डोग्रिड ने दी",
            "code": "ca"
        },
        {
            "id": "swedish",
            "nome": "Svenska",
            "code": "se"
        },
        {
            "id": "maithili",
            "nome": "मरातिलीName",
            "code": "ne"
        },
        {
            "id": "thai",
            "nome": "ภาษาไทย",
            "code": "th"
        },
        {
            "id": "armenian",
            "nome": "հայերեն",
            "code": "am"
        },
        {
            "id": "burmese",
            "nome": "ဗာရမ်",
            "code": "mn"
        },
        {
            "id": "pashto",
            "nome": "پښتوName",
            "code": "af"
        },
        {
            "id": "hmong",
            "nome": "Hmoob",
            "code": "la"
        },
        {
            "id": "dhivehi",
            "nome": "ދިވެހި",
            "code": "mv"
        },
        {
            "id": "chinese_traditional",
            "nome": "繁體中文",
            "code": "cn"
        },
        {
            "id": "luxembourgish",
            "nome": "LëtzebuergeschName",
            "code": "lu"
        },
        {
            "id": "sindhi",
            "nome": "سنڌي",
            "code": "pk"
        },
        {
            "id": "kurdish",
            "nome": "Kurdî",
            "code": "iq"
        },
        {
            "id": "turkish",
            "nome": "Türkçe",
            "code": "am"
        },
        {
            "id": "macedonian",
            "nome": "Македонски",
            "code": "mk"
        },
        {
            "id": "bulgarian",
            "nome": "български",
            "code": "bg"
        },
        {
            "id": "malay",
            "nome": "Malay",
            "code": "bn"
        },
        {
            "id": "luganda",
            "nome": "luganda",
            "code": "cd"
        },
        {
            "id": "marathi",
            "nome": "मराठीName",
            "code": "in"
        },
        {
            "id": "estonian",
            "nome": "eesti keel",
            "code": "ee"
        },
        {
            "id": "malayalam",
            "nome": "മലമാലം",
            "code": "in"
        },
        {
            "id": "slovene",
            "nome": "slovenščina",
            "code": "si"
        },
        {
            "id": "urdu",
            "nome": "اوردو",
            "code": "pk"
        },
        {
            "id": "portuguese",
            "nome": "Português",
            "code": "pt"
        },
        {
            "id": "igbo",
            "nome": "igbo",
            "code": "cm"
        },
        {
            "id": "kurdish_sorani",
            "nome": "کوردی-سۆرانی",
            "code": "iq"
        },
        {
            "id": "oromo",
            "nome": "adeta",
            "code": "ke"
        },
        {
            "id": "greek",
            "nome": "Ελληνικά",
            "code": "gr"
        },
        {
            "id": "spanish",
            "nome": "español",
            "code": "es"
        },
        {
            "id": "frisian",
            "nome": "Frysk",
            "code": "nl"
        },
        {
            "id": "somali",
            "nome": "Soomaali",
            "code": "so"
        },
        {
            "id": "amharic",
            "nome": "አማርኛ",
            "code": "et"
        },
        {
            "id": "nyanja",
            "nome": "potakuyan",
            "code": "mw"
        },
        {
            "id": "punjabi",
            "nome": "ਪੰਜਾਬੀName",
            "code": "pk"
        },
        {
            "id": "basque",
            "nome": "euskara",
            "code": "es-pv"
        },
        {
            "id": "italian",
            "nome": "Italiano",
            "code": "it"
        },
        {
            "id": "albanian",
            "nome": "albanian",
            "code": "al"
        },
        {
            "id": "korean",
            "nome": "한어",
            "code": "kp"
        },
        {
            "id": "tajik",
            "nome": "ТаjikӣName",
            "code": "tj"
        },
        {
            "id": "finnish",
            "nome": "Suomalainen",
            "code": "fi"
        },
        {
            "id": "kyrgyz",
            "nome": "Кыргыз тили",
            "code": "kg"
        },
        {
            "id": "ewe",
            "nome": "Eʋegbe",
            "code": "gh"
        },
        {
            "id": "croatian",
            "nome": "Hrvatski",
            "code": "hr"
        },
        {
            "id": "creole",
            "nome": "a n:n",
            "code": "gf"
        },
        {
            "id": "quechua",
            "nome": "Quechua",
            "code": "bo"
        },
        {
            "id": "bosnian",
            "nome": "bosanski",
            "code": "ba"
        },
        {
            "id": "maori",
            "nome": "Maori",
            "code": "nz"
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
                    <div className='box-elem col-11 mt-3' style={{height: "84px"}}>
                        <div className='row align-items-center w-100' onClick={langClicked} >
                            <div className='col-4'>
                                <span className={`fi fi-${(possibleLanguage.find(lang => lang.id === flag) || {}).code || ''}`}></span> 
                            </div>
                            <div className='col-4 d-flex justify-content-center align-items-center' style={{ fontSize: '15px'}}>
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