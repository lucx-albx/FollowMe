import React, { useState, useEffect, useContext } from 'react';
import './Percorso.css';
import Freccia from './Freccia.js';
import { variabili } from './App.js'
import OwnBtn from './OwnBtn';
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
    
    useEffect(() => {
        let timer
        let totalDirections
    
        const startAnimation = () => {
            if (directionIndex < totalDirections) {
                timer = setInterval(() => {
                    setDirectionIndex((prevIndex) => prevIndex + 1)
                }, 5000)
            } else {
                setMaxReached(true)
            }
        }
    
        if (tuttiPercorsi) {
            const percorsoCorrispondente = tuttiPercorsi.find((elem) =>
                partenza === elem.nomeLocale.toLowerCase().replace(/\s+/g, '') &&
                arrivo === elem.numeroLocaleDestinazione.toLowerCase().replace(/\s+/g, '')
            )
    
            if (percorsoCorrispondente) {
                const directions = percorsoCorrispondente.passaggi.map((elem) =>
                    elem.direzione.toLowerCase()
                )
                totalDirections = directions.length
    
                if (totalDirections > 0) {
                    startAnimation()
                }
            }
        }
    
        return () => {
            clearInterval(timer)
        }
    }, [partenza, arrivo, tuttiPercorsi, directionIndex])   

    const getDirectionClass = () => {
        if (tuttiPercorsi) {
            const percorsoCorrispondente = tuttiPercorsi.find((elem) =>
                partenza === elem.nomeLocale.toLowerCase().replace(/\s+/g, '') &&
                arrivo === elem.numeroLocaleDestinazione.toLowerCase().replace(/\s+/g, '')
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
                }
            }
        }
        return ["", ""]
    }

    const ricomincia =()=>{
        setDirectionIndex(0)
        setMaxReached(false)
    }

    const ultimaIndicazione =()=>{
        if (directionIndex !== 0)
            setDirectionIndex( directionIndex - 1 )
        
    }

    const prossimaIndicazione =()=>{
        setDirectionIndex( directionIndex + 1 )
    }

    const renderFreccia = () => {
        const directionClass = getDirectionClass()[0] + " RidFrec"
        const descDirection = getDirectionClass()[1]
        return (
            <>
                <Freccia className={directionClass} />
                <strong className='text-center'>{descDirection}</strong>
                <div className='menuBtn'>
                    <OwnBtn icona={faArrowRight} onClick={ultimaIndicazione}/>
                    <OwnBtn icona={faRefresh} onClick={ricomincia}/>
                    <OwnBtn icona={faArrowLeft} onClick={prossimaIndicazione}/>
                </div>
            </>
        )
    }

    return (
        <div className='MainPercorso'>
            {!maxReached ? (
                renderFreccia()
            ):(
                <>
                    <FontAwesomeIcon icon={faLocationDot} style={{fontSize:'60px', color:'#319547'}}/>
                    <p style={{fontSize:'20px'}}><strong>Sei arrivato a destinazione!</strong></p>
                    <div onClick={ricomincia} className='btn-repeat pulse-green'>RIPETI</div>
                </>
            )}
        </div>
    )
}

export default Percorso