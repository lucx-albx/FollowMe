import React, { useState, useEffect, createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Sos from './Sos'
import Emergenza from './Emergenza'
import QrCode from './QrCode'
import Sicurezza from './Sicurezza'
import LoadingSpinner from './LoadingSpinner'
import Percorso from './Percorso'
import Informazioni from './Informazioni.js'
import Permessi from './Permessi.js'
import Impostazioni from './Impostazioni.js'
import About from './About.js'
import SideBar from './SideBar'

export let variabili = createContext()
export let language = createContext()

const App = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [newVar, setNewVar] = useState({
		"partenza": "",
		"arrivo": "",
		"opzioni": []
	})

	const [lang, setLang] = useState("it")


	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 2000)
	}, [])


	return (
		<div>
			{isLoading ? (
        		<LoadingSpinner />
     		 ) : (
        		<BrowserRouter>
					<variabili.Provider value = {[{newVar, setNewVar}]}>
						<language.Provider value={[{lang, setLang}]}>
							<Navbar/>
							<SideBar/>
							<Routes>
								<Route element={<Sos/>} path={'/Sos'} />
								<Route element={<Emergenza/>} path={'/Emergenza'} />
								<Route element={<QrCode/>} path={'/QrCode'} />
								<Route element={<Sicurezza/>} path={'/'} />
								<Route element={<Percorso/>} path={'/Percorso'} />
								<Route element={<Informazioni/>} path={'/Informazioni'} />
								<Route element={<Permessi/>} path={'/Permessi'} />
								<Route element={<Impostazioni/>} path={'/Impostazioni'} />
								<Route element={<About/>} path={'/About'} />
							</Routes>
							<Footer/>
						</language.Provider>
					</variabili.Provider>
         		</BrowserRouter>
      		)}
		</div>
	)
}

export default App