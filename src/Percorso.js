import React, { useState, useEffect } from 'react'
import './Percorso.css'
import Freccia from './Image/Freccia.png'

const Percorso = (props) => {
    const partenza = props.datiPartenza
    const arrivo = props.datiArrivo
    const tuttiPercorsi = props.percorsi

    useEffect(() => {
        caricoPercorso()
    }, [])

    const caricoPercorso =()=>{
        if (tuttiPercorsi !== undefined){
            tuttiPercorsi.map((elem, i)=>{
                if(partenza === elem.nomeLocale && arrivo === elem.nomeLocaleDestinazione){
                    //TODO
                    return(
                        <div>
                            
                        </div>
                    )
                }
            })
        }
    }

    return (
        <div className='MainPercorso invisibile'>
            {caricoPercorso()}
        </div>
    )
}

export default Percorso