import React, { useState, useEffect, useContext } from 'react';
import './Percorso.css';
import Freccia from './Freccia.js';
import { variabili } from './App.js'
import OwnBtn from './OwnBtn';
import Loader from './Loader';
import { faArrowLeft, faArrowRight, faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Percorso = () => {
    let impostaVar = useContext(variabili)
    const partenza = impostaVar[0].newVar.partenza.toLowerCase().replace(/\s+/g, '')
    const arrivo = impostaVar[0].newVar.arrivo.toLowerCase().replace(/\s+/g, '')
    const tuttiPercorsi = impostaVar[0].newVar.opzioni
    const [directionIndex, setDirectionIndex] = useState(0)
    const [maxReached, setMaxReached] = useState(false)
    const urlUscite = process.env.REACT_APP_URL_USCITE
    const urlIngressi = process.env.REACT_APP_URL_ENTRATE

    useEffect(() => {
        caricaPercorso()
    }, [])
    
    const caricaPercorso =()=>{
		let datPart = partenza
		let datArr = arrivo
        let mainPer = document.querySelector(".MainPercorso")
        let load = document.querySelector(".dot-spinner")
		let url = ""

        if(datPart === "ingresso"){
            url = urlIngressi
        } else if(datArr === "uscita"){
            url = urlUscite
        } 

        load.classList.remove("invisibile")
        mainPer.classList.add("invisibile")

        fetch(url)
        .then((testo) => testo.json())
        .then((data)=>{
            let part = datPart
            let arr = datArr
            let percorsiEsistenti = false

            data.map((elem, i)=>{
                if(part ===  elem.partenza.toLowerCase().replace(/\s+/g, '') &&  
                    arr ===  elem.destinazione.toLowerCase().replace(/\s+/g, ''))
                    percorsiEsistenti = true
                else if(percorsiEsistenti !== true)
                    percorsiEsistenti = false
            })
            
            if (percorsiEsistenti === true){
                impostaVar[0].setNewVar({
                    "partenza": datPart,
                    "arrivo": datArr,
                    "opzioni": data
                })

                mainPer.classList.remove("invisibile")
                load.classList.add("invisibile")
            }
            
        })
	}

    const getDirectionClass = () => {
        if (tuttiPercorsi) {
            const percorsoCorrispondente = tuttiPercorsi.find((elem) =>
                partenza === elem.partenza.toLowerCase().replace(/\s+/g, '') &&
                arrivo === elem.destinazione.toLowerCase().replace(/\s+/g, '')
            )

            if (percorsoCorrispondente) {
                const directions = percorsoCorrispondente.passaggi.map((elem) =>
                    elem.direzione.toLowerCase()
                )

                const descrizione = percorsoCorrispondente.passaggi.map((elem) =>
                    elem.descrizione
                )

                if (directionIndex < directions.length) {
                    return [directions[directionIndex], descrizione[directionIndex]]
                } else {
                    setMaxReached(true)
                }
            }
        }
        
        return ["", ""]
    }

    const ricomincia = () => {
        setDirectionIndex(0)
        setMaxReached(false)
    }

    const ultimaIndicazione = () => {
        if (directionIndex !== 0) {
            setDirectionIndex(directionIndex - 1)
        }
    }

    const prossimaIndicazione = () => {
        setDirectionIndex(directionIndex + 1)
    }

    const renderFreccia = () => {
        const directionClass = getDirectionClass()[0] + " RidFrec"
        const descDirection = getDirectionClass()[1]
        return (
            <>
                <Freccia className={directionClass} />
                <strong className='text-center'>{descDirection}</strong>
                <div className='menuBtn'>
                    <OwnBtn icona={faArrowRight} onClick={ultimaIndicazione} />
                    <OwnBtn icona={faRefresh} onClick={ricomincia} />
                    <OwnBtn icona={faArrowLeft} onClick={prossimaIndicazione} />
                </div>
            </>
        )
    }

    return (
        <div className='MainPercorso'>
            {!maxReached ? (
                renderFreccia()
            ) : (
                <>
                    <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '60px', color: '#319547' }} />
                    <p style={{ fontSize: '20px' }}><strong>Sei arrivato a destinazione!</strong></p>
                    {/* <div onClick={ricomincia} className='btn-repeat pulse-green'>RIPETI</div> */}
                </>
            )}
            <Loader/>
        </div>
    )
}

export default Percorso
