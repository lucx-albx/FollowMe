import React, { useEffect, useContext } from 'react'
import './Sicurezza.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { variabili } from './App.js'
import { useLocation } from 'react-router-dom';

const Sicurezza = () => {
	window.scrollTo(0,0)

	let impostaVar = useContext(variabili)
	let location = useLocation();
	const navigate = useNavigate();
	const UrlIngressi = "https://raw.githubusercontent.com/MattiaBracco05/FollowMe/main/Direzioni/Entrate.json"
	const urlSelect = "https://raw.githubusercontent.com/MattiaBracco05/FollowMe/main/Edificio.json"

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

	const riempiSelect =()=>{
		let opt = ""
		let sel = document.querySelector(".dati-arrivo")

		fetch(urlSelect)
		.then((testo) => testo.json())
		.then((data)=>{
			data.map((elem, i)=>{
				opt += `<option>${elem.classe}</option>`
			})

			sel.innerHTML = opt
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
		let frecciaTornaIndietro = document.querySelector(".posizione-freccia").classList

		if (datPart !== ""){
			fetch(UrlIngressi)
			.then((testo) => testo.json())
			.then((data)=>{
				let part = datPart.toLowerCase().replace(/\s+/g, '')
				let arr = datArr.toLowerCase().replace(/\s+/g, '')
				let percorsiEsistenti = false

				data.map((elem, i)=>{
					if(part ===  elem.nomeLocale.toLowerCase().replace(/\s+/g, '') &&  
						arr ===  elem.numeroLocaleDestinazione.toLowerCase().replace(/\s+/g, ''))
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