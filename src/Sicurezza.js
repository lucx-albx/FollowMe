import React, { useState } from 'react'
import './Sicurezza.css'
import Percorso from './Percorso'

const Sicurezza = () => {
	const [datiPartenza, setDatiPartenza] = useState("")
	const [datiArrivo, setDatiArrivo] = useState("")
	const [percorsi, setPercorsi] = useState([])
	const UrlProva = "https://raw.githubusercontent.com/MattiaBracco05/FollowMe/main/Direzioni/Stanza_04/S04D01.json"

	const caricaPercorso =()=>{
		let datPart = document.querySelector(".dati-partenza").value
		let datArr = document.querySelector(".dati-arrivo").value
		let cmpPercorso = document.querySelector(".MainPercorso").classList
		let cmpSelPercorso = document.querySelector(".MainSelezionePercorsi").classList

		if (datPart !== "" && datArr !== ""){
			fetch(UrlProva)
			.then((testo) => testo.json())
			.then((data)=>{
				let part = datPart.toLowerCase().replace(/\s+/g, '')
				let arr = datArr.toLowerCase().replace(/\s+/g, '')
				let percorsiEsistenti = false

				data.map((elem, i)=>{
					if(part ===  elem.nomeLocale.toLowerCase().replace(/\s+/g, '') &&  
						arr ===  elem.nomeLocaleDestinazione.toLowerCase().replace(/\s+/g, ''))
						percorsiEsistenti = true
					else if(percorsiEsistenti !== true)
						percorsiEsistenti = false
					
				})

				if (percorsiEsistenti === true){
					setPercorsi(data)
					setDatiPartenza(datPart)
					setDatiArrivo(datArr)

					cmpSelPercorso.add("invisibile")
					cmpPercorso.remove("invisibile")
				} else { 
					alert("no")
				}
				
			})
			
		} else {
			alert("no")
		}
	}

	return (
		<div className='mt-6'>
			<div className='MainSelezionePercorsi'>
				<p className='centra'>Inserisci l’aula in cui sei e l’aula in cui vuoi andare e ti portiamo noi</p>
				
				<div className='MainRotte mt-5'>
					<input type="text" name="" className='dati-partenza col-10' placeholder="Partenza..."/>
					<input type="text" name="" className='dati-arrivo col-10' placeholder="Destinazione..."/>
				
					<div className='btn-start' onClick={caricaPercorso}>AVVIA</div>
				</div>
			</div>

			<Percorso partenza={datiPartenza} arrivo={datiArrivo} datiPercorsi={percorsi}/>
		</div>
	)
}

export default Sicurezza