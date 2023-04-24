import '../Styles/Homepage.scss'
import React from 'react'
import Navbar from '../Containers/Navbar'
import AboutUs from '../Containers/AboutUs'
import OurAnimals from '../Containers/OurAnimals'
import AboutAnimals from '../Containers/AboutAnimals'
import Footer from '../Containers/Footer'


export default function Main() {
  return (
    <div className='main-page'>
      <Navbar />
      <AboutUs />
      <OurAnimals />
      <AboutAnimals />
      <Footer />
    </div>
  )
}
