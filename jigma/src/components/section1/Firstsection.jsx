import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Cards from '../Cards/Cards'
import "./firstsection.modules.css"
const Firstsection = () => {
  return (
    <div className='backgroundsection'>
    <Navbar />
      <Header />
      <Cards/>
    </div>
  )
}

export default Firstsection
