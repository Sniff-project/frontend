import React from "react";
import { AboutUs, OurAnimals, AboutAnimals, Footer} from "@containers/Homepage";
import { Navbar } from "@containers/Navbar";
import './style.scss';

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


