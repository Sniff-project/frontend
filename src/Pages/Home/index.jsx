import React from "react";
import '../../Styles/Homepage.scss';
import Navbar from '../../Containers/Navbar/Navbar';
import AboutUs from '../../Containers/Homepage/AboutUs';
import OurAnimals from '../../Containers/Homepage/OurAnimals';
import AboutAnimals from '../../Containers/Homepage/AboutAnimals';
import Footer from '../../Containers/Homepage/Footer';

const Home = () => {
  return (
    <div className='main-page'>
      <Navbar />
      <AboutUs />
      <OurAnimals />
      <AboutAnimals />
      <Footer />
    </div>
  )
};

export default Home;


