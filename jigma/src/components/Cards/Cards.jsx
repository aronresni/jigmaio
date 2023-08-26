import React from 'react'
import Cardright from './Cardright'
import Cardsleft from './Cardsleft'
import 'animate.css'
const Cards = () => {
    return (
        <div className='background flex flex-col md:flex-row justify-center'>
            <div className="animate__animated animate__fadeInLeft">
                <Cardsleft />
            </div>
            <div className="animate__animated animate__fadeInRight">
                <Cardright />
            </div>
        </div>
    )
}

export default Cards
