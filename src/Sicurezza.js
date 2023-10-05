import React, { useEffect, useContext } from 'react'
import './Sicurezza.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { variabili } from './App.js'
import { useLocation } from 'react-router-dom';

const Sicurezza = () => {
	window.scrollTo(0,0)

	let impostaVar = useContext(variabili)
	let location = useLocation()
	const navigate = useNavigate()
	const urlIngressi = process.env.REACT_APP_URL_ENTRATE
	const urlSelect = process.env.REACT_APP_URL_EDIFICO
	const urlUscite = process.env.REACT_APP_URL_USCITE

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

	useEffect(() => {
		riempiSelect()
		controllaImpostazioni()
	}, [])

	const controllaImpostazioni =()=>{
		let flagAnimazioni = localStorage.getItem("animazioni")
		let pulseAvvia = document.querySelector(".avviaBtn")

		if (flagAnimazioni === "true" || flagAnimazioni == null){
			pulseAvvia.classList.add("pulse-green-avvia")
		} else {
			if(pulseAvvia.classList.contains("pulse-green-avvia"))
				pulseAvvia.classList.remove("pulse-green-avvia")
		}
	}

	const riempiSelect = () => {
		let opt = "";
		let sel = document.querySelector(".dati-arrivo");
	  
		fetch(urlSelect)
		.then((testo) => testo.json())
		.then((data) => {
			let classiNumeri = []
			let altreClassi = []
	  
			data.forEach((elem) => {
				//controllo se la stringa inizia con un carattere numerico
				if (/^\d/.test(elem.classe)) {
					classiNumeri.push(elem.classe)
				} else {
					altreClassi.push(elem.classe)
				}
			})
	  
			//Ordina le classi numeriche in ordine crescente
			classiNumeri.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
	  
			//Ordino le altre classi in ordine alfabetico
			altreClassi.sort()
	  
			//Unisco le classi numeriche e le altre classi
			let tutteLeClassi = [...classiNumeri, ...altreClassi]
	  
			//Creo le opzioni per la select
			tutteLeClassi.forEach((classe) => {
				opt += `<option>${classe}</option>`
			})
	  
			sel.innerHTML = opt;
			controllaParamteri()
		  })
	  }
	  

	const controllaParamteri =()=>{
		let inputPartenza = document.querySelector(".dati-partenza")
		let inputArrivo = document.querySelector(".dati-arrivo")
		let searchParams = new URLSearchParams(location.search)

		if (searchParams.get("partenza") !== null && searchParams.get("classe") !== null){
			let partenza = searchParams.get("partenza").replace(/"/g, "")
			let classe = searchParams.get("classe").replace(/"/g, "")

			for (let i = 0; i < inputArrivo.options.length; i++) {
				if (inputArrivo.options[i].value === classe) {
					inputArrivo.options[i].selected = true
					break
				}
			}

			inputPartenza.value = partenza

			caricaPercorso()
		} else {
			inputPartenza.value = "Ingresso"
		}
	}
	
	const caricaPercorso =()=>{
		let datPart = document.querySelector(".dati-partenza").value
		let datArr = document.querySelector(".dati-arrivo").value
		let url = ""
		let partNoChar = datPart.toLowerCase().replace(/\s+/g, '')
		let frecciaTornaIndietro = document.querySelector(".posizione-freccia").classList

		console.log(datPart)

		if (datPart !== ""){
			if(partNoChar === "ingresso")
				url = urlIngressi
			else if(partNoChar === "uscita")
				url = urlUscite
			

			fetch(url)
			.then((testo) => testo.json())
			.then((data)=>{
				let part = datPart.toLowerCase().replace(/\s+/g, '')
				let arr = datArr.toLowerCase().replace(/\s+/g, '')
				let percorsiEsistenti = false

				data.map((elem, i)=>{
					if(part ===  elem.nomeLocale.toLowerCase().replace(/\s+/g, '') &&  
						arr ===  elem.classeDestinazione.toLowerCase().replace(/\s+/g, ''))
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
					Toast.fire({icon: 'warning', title: 'La partenza inserita sembra essere inesistente'})
				}
				
			})
			
		} else {
			Toast.fire({icon: 'warning', title: 'La partenza inserita sembra essere vuota'})
		}
	}

	return (
		<div className='mt-6'>
			<div className='MainSelezionePercorsi'>
				<p className='centra'>Inserisci il posto in cui sei e il posto in cui vuoi andare, ti portiamo noi!</p>
				
				<div className='MainRotte mt-5'>
					<input type="text" name="" className='dati-partenza col-10' placeholder="Partenza..."/>
					<select className='dati-arrivo'/>
				
					<div className='btn-start avviaBtn' onClick={caricaPercorso}>AVVIA</div>
				</div>
			</div>
		</div>
	)
}

export default Sicurezza