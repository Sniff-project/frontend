import React from "react";
import { AboutUs, OurAnimals, AboutAnimals } from "@containers/Homepage";
import "./style.scss";

const Home = () => {
  return (
    <>
      <AboutUs />
      <OurAnimals />
      <AboutAnimals />
    </>
  );
};

export default Home;
