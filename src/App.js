import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import Emergenza from './Emergenza'
import QrCode from './QrCode'
import Sicurezza from './Sicurezza'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route element={<Home/>} path={'/'} />
					<Route element={<Emergenza/>} path={'/Emergenza'} />
					<Route element={<QrCode/>} path={'/QrCode'} />
					<Route element={<Sicurezza/>} path={'/Sicurezza'} />
				</Routes>
				<Footer/>
         	</BrowserRouter>
		</div>
	)
}

export default App