import React, { useEffect } from 'react'
import './Impostazioni.css'
import CustomSwitch from './CustomSwitch'

const Impostazioni = () => {

    useEffect(() => {
        controllaStatoSwitch()
    }, [])

    const controllaStatoSwitch =()=>{
        let flagAnimazioni = localStorage.getItem("animazioni")
        let switchAnimazioni = document.querySelector(".Animazioni")
        
        console.log(flagAnimazioni === "true")

        if (flagAnimazioni === "true" || flagAnimazioni == null)
            switchAnimazioni.checked = true
        else 
            switchAnimazioni.checked = false
    }
    

    const sceltaAnimazione =(e)=>{
        let scelta = e.currentTarget.checked

        if (scelta === true)
            localStorage.setItem("animazioni", "true")
        else 
            localStorage.setItem("animazioni", "false")
        
    }

    return (
        <div className='mt-6 centra-elementi'>
            <div className='box-elem col-11'>
                <CustomSwitch text={"Animazioni: "} onClick={sceltaAnimazione} className={"Animazioni"}/>
            </div>
        </div>
    )
}

export default Impostazioni