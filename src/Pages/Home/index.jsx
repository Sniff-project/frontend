import React from "react";
import { AboutUs, OurAnimals, AboutAnimals } from "@containers/Homepage";
import "./style.scss";

const Home = () => {
  return (
    <div className="main-page">
      <div className="container2000">
        <AboutUs />
        <OurAnimals />
        <AboutAnimals />
      </div>
    </div>
  );
};

export default Home;
