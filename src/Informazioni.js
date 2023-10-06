import './Informazioni.css'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgUscita from './Image/img-uscita.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

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
      arrows: true,
      autoplay: false,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      // appendDots: (dots) => (
      //   <ul style={{ position: 'relative', bottom: '100px'}}>
      //     {dots}
      //   </ul>
      // ),
    };
  
    return (
      <div >
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
                <li>Interrompere ogni attività ed abbandonare tutti gli effetti personali</li>
                <li>Lasciare le attrezzature scolastiche in modo da non intralciare la fuga</li>
                <li>Disporsi in ordine dietro “l’apri fila”</li>
                <li>Rispettare le precedenze stabilite per l’uscita</li>
                <li>Sfollare con sollecitudine, ma senza correre</li>
                <li>Non tornare mai indietro per recuperare cose dimenticate</li>
                <li>Avviarsi verso i punti di raccolta</li>
              </ul>

              </div>}
              />
<Slide content={
  <div className="slide-3">
    <p style={{ textAlign: 'center' }} className="title-crediti">Il sito è stato sviluppato da</p>

    <div className="row">
      <div className="col-lg-6 col-sm-12">
        <div className="text-center">
          <FontAwesomeIcon icon={faCircleUser} className="circleUser" />
          <p style={{ textAlign: 'center' }} className="p-mt">Alba Luca</p>
        </div>
      </div>

      <div className="col-lg-6 col-sm-12">
        <div className="text-center">
          <FontAwesomeIcon icon={faCircleUser} className="circleUser" />
          <p style={{ textAlign: 'center' }} className="p-mt">Galeasso Federico</p>
        </div>
      </div>
    </div>
  </div>
} />

<Slide content={
  <div className="slide-3">
    <p style={{ textAlign: 'center' }} className="title-crediti">Grafica</p>

    <div className="row">
      <div className="col-lg-6 col-sm-12">
        <div className="text-center">
          <FontAwesomeIcon icon={faCircleUser} className="circleUser" />
          <p style={{ textAlign: 'center' }} className="p-mt">Audisio Nicolò</p>
        </div>
      </div>

      <div className="col-lg-6 col-sm-12">
        <div className="text-center">
          <FontAwesomeIcon icon={faCircleUser} className="circleUser" />
          <p style={{ textAlign: 'center' }} className="p-mt">Martini Gabriele</p>
        </div>
      </div>
    </div>
  </div>
} />

<Slide content={
  <div className="slide-3">
    <p style={{ textAlign: 'center' }} className="title-crediti">Elaborazione percorsi</p>

    <div className="row">
      <div className="col">
        <div className="text-center">
          <FontAwesomeIcon icon={faCircleUser} className="circleUser" />
          <p style={{ textAlign: 'center' }} className="p-mt">Il resto della classe 5L</p>
        </div>
      </div>
    </div>
  </div>
} />

          </Slider>
        </div>
      </div>
    );
  };
  
  export default Informazioni;
  // <FontAwesomeIcon icon={faCircleUser} className="circleUser"/>