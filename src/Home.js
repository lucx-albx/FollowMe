import React, { useEffect } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
	window.scrollTo(0,0)

	useEffect(() => {
		controllaImpostazioni()
	}, [])

	const controllaImpostazioni =()=>{
		let flagAnimazioni = localStorage.getItem("animazioni")
		let pulseSos = document.querySelector(".MainSos")

		if (flagAnimazioni === "true" || flagAnimazioni == null){
			pulseSos.classList.add("pulse")
		} else {
			if(pulseSos.classList.contains("pulse"))
				pulseSos.classList.remove("pulse")
		}
	}

	return (
		<div className='MainHome'>
			<NavLink to={"/QrCode"} style={{ textDecoration: 'none', color: '#319547' }}>
				<div className='MainSos text-center pulse'>
					<p style={{fontWeight: 'bold'}}>SOS</p> 
					<p>Press</p> 
				</div>
			</NavLink>
		</div>
	);
};

export default Home;
