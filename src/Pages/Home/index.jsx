import React from "react";
import { AboutUs, OurAnimals, AboutAnimals } from "@containers/Homepage";
import "./style.scss";

const Home = () => {
  return (
    <div className="main-page">
      <AboutUs />
      <OurAnimals />
      <AboutAnimals />
    </div>
  );
};

export default Home;
