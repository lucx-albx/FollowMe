import React from 'react'
import './OwnBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OwnBtn = ({icona, onClick}) => {
    return (
        <div className="button" onClick={onClick}>
            <div className="button-box">
                <span className="button-elem">
                    <FontAwesomeIcon icon={icona}/>
                </span>
                <span className="button-elem">
                    <FontAwesomeIcon icon={icona}/>
                </span>
            </div>
        </div>
    )
}

export default OwnBtn