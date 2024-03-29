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
	const urlSelect = process.env.REACT_APP_URL_EDIFICO
	
	const Toast = Swal.mixin({
		toast: true,
		position: 'top',
		showConfirmButton: false,
		timer: 5000,
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

		if (flagAnimazioni === "true"){
			pulseAvvia.classList.add("pulse-green-avvia")
		} else if(flagAnimazioni === "false" || flagAnimazioni == null) {
			if(pulseAvvia.classList.contains("pulse-green-avvia"))
				pulseAvvia.classList.remove("pulse-green-avvia")
		}
	}

	const riempiSelect = () => {
		let opt = "";
		let sel2 = document.querySelector(".dati-arrivo");
		let sel1 = document.querySelector(".dati-partenza");
	  
		fetch(urlSelect)
		.then((testo) => testo.json())
		.then((data) => {
			let classiNumeri = []
			let altreClassi = []
	  
			data.forEach((elem) => {
				//controllo se la stringa inizia con un carattere numerico
				if (/^\d/.test(elem.classe)) {
					classiNumeri.push(elem.classe)
				} else if(elem.classe !== "non definita"){
					altreClassi.push(elem.classe)
				}
			})
	  
			//Ordina le classi numeriche in ordine crescente
			classiNumeri.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
	  
			//Ordino le altre classi in ordine alfabetico
			altreClassi.sort()
	  
			//Unisco le classi numeriche e le altre classi
			let tutteLeClassi = ["Seleziona...", "Ingresso", "Uscita", ...classiNumeri, ...altreClassi]
	  
			//Creo le opzioni per la select
			tutteLeClassi.forEach((classe) => {
				// if(classe.endsWith(" i")){
				// 	opt += `<option class="ignore"><p >${classe.substring(0, classe.length-2)}</p></option>`
				// }else{
				// 	opt += `<option><p>${classe}</p></option>`
				// }
				opt += `<option><p>${classe}</p></option>`
				
			})
	  
			sel1.innerHTML = opt;
			sel2.innerHTML = opt
			// sel2[2].selected = true
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
				if (inputPartenza.options[i].value === partenza) {
					inputPartenza.options[i].selected = true
					break
				}

				if (inputArrivo.options[i].value === classe) {
					inputArrivo.options[i].selected = true
					break
				}
			}

			inputPartenza.value = partenza

			avviaNavigazione()
		}
	}
	
	const avviaNavigazione =()=>{
		let frecciaTornaIndietro = document.querySelector(".posizione-freccia").classList
		let datPart = document.querySelector(".dati-partenza").value
		let datArr = document.querySelector(".dati-arrivo").value

		impostaVar[0].setNewVar({
			"partenza": datPart,
			"arrivo": datArr
		})

		//!questo test /^\d/.test(datPart) controlla se la stringa inizia per un numero
		if(datPart === "Seleziona..." || datArr === "Seleziona..."){
			Toast.fire({icon: 'warning', title: 'Devi selezionare una partenza ed una destinazione valida prima di avviare la navigazione'})
		} else if(datPart === "Uscita"){
			Toast.fire({icon: 'warning', title: 'Mi spiace ma non puoi partire da uscita'})
		} else if(datPart === "Ingresso" && datArr === "Ingresso"){
			Toast.fire({icon: 'warning', title: 'Non è possibile andare da ingresso ad ingresso'})
		} else if(datPart === "Ingresso" && datArr === "Uscita" || datPart === "Uscita" && datArr === "Ingresso"){
			Toast.fire({icon: 'warning', title: 'Questo percorso non è valido, inseriscine una corretto'})
		} else if(datPart === datArr){
			Toast.fire({icon: 'warning', title: 'Non puoi andare in due stanza uguali'})
		} else {
			frecciaTornaIndietro.remove("invisibile")
			navigate("/Percorso")
		}	
	}
	
	return (
		<div className='mt-6'>
			<div className='MainSelezionePercorsi'>
				<p className='centra'>Enter your position and where you want to go, we will bring you to there!</p>
				
				<div className='MainRotte mt-5'>
					<select className='dati-partenza'/>
					<select className='dati-arrivo'/>
				
					<div className='btn-start avviaBtn' onClick={avviaNavigazione}>START</div>
				</div>
			</div>
		</div>
	)
}

export default Sicurezza