import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import Emergenza from './Emergenza'
import QrCode from './QrCode'
import Sicurezza from './Sicurezza'
import LoadingSpinner from './LoadingSpinner';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
	return (
		<div>
			{isLoading ? (
        		<LoadingSpinner />
     		 ) : (
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
      		)}
		</div>
	)
}

export default App