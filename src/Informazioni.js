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
              <p className="title-uscita">Easy and fast exit</p>
              <p className="p-uscita">Get to the nearest emergency exit as quickly as possible</p>
              </div>} />
                        <Slide content={
              <div className="slide-2">
              <p className="p-affollamento">In case of crowding:</p>
              <ul>
                <li>Stop all activities and abandon all personal belongings</li>
                <li>Leave school equipment in a way that does not obstruct evacuation</li>
                <li>Line up behind the "head of the line"</li>
                <li>Follow established exit priorities</li>
                <li>Evacuate promptly but without running</li>
                <li>Never go back to retrieve forgotten items</li>
                <li>Proceed to the assembly points</li>
              </ul>
              </div>}
              />
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Informazioni;
  // <FontAwesomeIcon icon={faCircleUser} className="circleUser"/>