import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <div className="loader-percorsi dot-spinner invisibile">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
        </div>
    )
}

export default Loader