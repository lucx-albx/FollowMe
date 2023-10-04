import React from 'react'
import './Impostazioni.css'
import CustomSwitch from './CustomSwitch'

const Impostazioni = () => {
    return (
        <div className='mt-6 centra-elementi'>
            <div className='box-elem col-11'>
                <CustomSwitch text={"Animazioni: "}/>
            </div>
        </div>
    )
}

export default Impostazioni