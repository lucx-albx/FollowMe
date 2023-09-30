import React, { useState, useContext } from 'react'
import './Sicurezza.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { variabili } from './App.js'

const Sicurezza = () => {
	let impostaVar = useContext(variabili)
	const navigate = useNavigate();
	const UrlProva = "https://raw.githubusercontent.com/MattiaBracco05/FollowMe/main/Direzioni/Stanza_04/S04D01.json"

	const Toast = Swal.mixin({
		toast: true,
		position: 'top',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	})

	const caricaPercorso =()=>{
		let datPart = document.querySelector(".dati-partenza").value
		let datArr = document.querySelector(".dati-arrivo").value
		let frecciaTornaIndietro = document.querySelector(".posizione-freccia").classList

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
					impostaVar[0].setNewVar({
						"partenza": datPart,
						"arrivo": datArr,
						"opzioni": data
					})
					
					frecciaTornaIndietro.remove("invisibile")
					navigate("/Sicurezza/Percorso")
				} else { 
					Toast.fire({icon: 'warning', title: 'I percorsi inseriti sono inesistenti'})
				}
				
			})
			
		} else {
			Toast.fire({icon: 'warning', title: 'I campi dei percorsi sembrano essere vuoti'})
		}
	}

	return (
		<div className='mt-6'>
			<div className='MainSelezionePercorsi'>
				<p className='centra'>Inserisci l’aula in cui sei e l’aula in cui vuoi andare, ti portiamo noi!</p>
				
				<div className='MainRotte mt-5'>
					<input type="text" name="" className='dati-partenza col-10' placeholder="Partenza..."/>
					<input type="text" name="" className='dati-arrivo col-10' placeholder="Destinazione..."/>
				
					<div className='btn-start pulse-green' onClick={caricaPercorso}>AVVIA</div>
				</div>
			</div>
		</div>
	)
}

export default Sicurezza