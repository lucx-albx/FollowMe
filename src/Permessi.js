import './Permessi.css'
import React from 'react';
import uno from './Image/1.jpg'
import due from './Image/2.jpg'
import tre from './Image/3.jpg'
import quattro from './Image/4.jpg'
import cinque from './Image/5.jpg'
import sei from './Image/6.jpg'

const Permessi = () => {
	
	return (
		<div className='setOverflowPermessi MainPerm'>
			<p>Per funzionare, lo scanner di QR Code deve avere il permesso della fotocamera attivato.<br/><b>Ecco i passaggi da seguire se per sbaglio si clicca su "Block".</b></p>
            <img src={uno} style={{width:'250px'}}/>

<ul style={{marginTop:'50px'}}>
<li style={{marginLeft:'-25px'}}>
<b>Passo 1</b>:<br/>
</li>
</ul>
            <p style={{marginTop:'-10px'}}>Cliccare sull'icona della fotocamera in alto a sinistra, nella barra degli indirizzi.</p>
            <img src={due} style={{width:'250px', border:'1px solid grey'}}/>

<ul style={{marginTop:'50px'}}>
<li style={{marginLeft:'-25px'}}>
<b>Passo 2</b>:<br/>
</li>
</ul>
            <p style={{marginTop:'-10px'}}>Cliccare sulla voce "Permissions".</p>
            <img src={tre} style={{width:'250px'}}/>

<ul style={{marginTop:'50px'}}>
<li style={{marginLeft:'-25px'}}>
<b>Passo 3</b>:<br/>
</li>
</ul>
            <p style={{marginTop:'-10px'}}>Abilitare i permessi della fotocamera cliccando sull'icona.</p>
            <img src={quattro} style={{width:'250px'}}/>
            <img src={cinque} style={{width:'250px', marginTop:'10px'}}/>

<ul style={{marginTop:'50px'}}>
<li style={{marginLeft:'-25px'}}>
<b>Passo 5</b>:<br/>
</li>
</ul>
            <p style={{marginTop:'-10px'}}>Aggiorna la pagina e dovresti riusicire a visualizzare lo scanner di QR Code.</p>
            <img src={sei} style={{width:'250px', border:'1px solid grey'}}/>

        </div>
		);
	};

export default Permessi