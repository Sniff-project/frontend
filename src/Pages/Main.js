import '../Styles/Homepage.scss'
import React from 'react'
import Navbar from '../Containers/Navbar'
import AboutUs from '../Containers/AboutUs'
import OurAnimals from '../Containers/OurAnimals'


export default function Main() {
  return (
    <div className='main-page'>
      <Navbar />
      <AboutUs />
      <OurAnimals />
    </div>
  )
}
