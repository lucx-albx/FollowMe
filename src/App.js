import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route element={<Home/>} path={'/'} />
					<Route element={null} path={'/Emergenza'} />
					<Route element={null} path={'/QrCode'} />
					<Route element={null} path={'/Sicurezza'} />
				</Routes>
				<Footer/>
         	</BrowserRouter>
		</div>
	)
}

export default App