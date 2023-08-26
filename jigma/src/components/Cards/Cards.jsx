import React from 'react'
import Cardright from './Cardright'
import Cardsleft from './Cardsleft'
const Cards = () => {
    return (
        <div className='background flex flex-col md:flex-row justify-center'>
            <Cardsleft />
            <Cardright />
        </div>
    )
}

export default Cards
