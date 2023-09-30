import React, {useState, useEffect, createContext} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import Emergenza from './Emergenza'
import QrCode from './QrCode'
import Sicurezza from './Sicurezza'
import LoadingSpinner from './LoadingSpinner'
import Percorso from './Percorso'
import Informazioni from './Informazioni'
export let variabili = createContext()

const App = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [newVar, setNewVar] = useState({
		"partenza": "",
		"arrivo": "",
		"opzioni": []
	})

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1150)
	}, [])

	return (
		<div>
			{isLoading ? (
        		<LoadingSpinner />
     		 ) : (
        		<BrowserRouter>
					<variabili.Provider value = {[{newVar, setNewVar}]}>
						<Navbar/>
						<Routes>
							<Route element={<Home/>} path={'/'} />
							<Route element={<Emergenza/>} path={'/Emergenza'} />
							<Route element={<QrCode/>} path={'/QrCode'} />
							<Route element={<Sicurezza/>} path={'/Sicurezza'} />
							<Route element={<Percorso/>} path={'/Sicurezza/Percorso'} />
							<Route element={<Informazioni/>} path={'/Informazioni'} />
						</Routes>
						<Footer/>
					</variabili.Provider>
         		</BrowserRouter>
      		)}
		</div>
	)
}

export default App