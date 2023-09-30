import './Informazioni.css'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgUscita from './Image/img-uscita.png'

const Slide = ({ content }) => (
    <div className="slide">
      {content}
    </div>
  );
  
  const Informazioni = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    };
  
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <Slide content={<div className="slide-1">
<img src={imgUscita} className="imgUscita"/>
<p className="title-uscita">Uscita facile & veloce</p>
<p className="p-uscita">Arriva il più velocemente possibile all’uscita d’emergenza più vicina</p>
</div>} />
          <Slide content={
<div className="slide-2">
<p className="p-affollamento">In caso di affollamento:</p>
            <ul>
  <li>Mantenere la calma</li>
  <li>Interrompere ogni attività ed abbandonare tutti gli effetti personali</li>
  <li>Lasciare le attrezzature scolastiche in modo da non intralciare la fuga</li>
  <li>Disporsi in ordine dietro “l’apri fila”</li>
  <li>Restare uniti, senza urlare e senza spingere</li>
  <li>Rispettare le precedenze stabilite per l’uscita</li>
  <li>Sfollare con sollecitudine, ma senza correre</li>
  <li>Percorrere le vie di esodo nel senso stabilito dalle mappe</li>
  <li>Non tornare mai indietro per recuperare cose dimenticate</li>
  <li>Rispettare ed eseguire i compiti assegnati</li>
  <li>Avviarsi verso i punti di raccolta</li>
</ul>

</div>}
/>
          <Slide content={<div className="slide-3">Slide 3</div>} />
        </Slider>
      </div>
    );
  };
  
  export default Informazioni;