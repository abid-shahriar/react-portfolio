import React from "react";

import AboutInfo from "./AboutInfo";

import StayConnected from "./StayConnected";
import Title from "../globals/Title";

function About() {
  return (
    <div className="section about" id="about">
      <div className="section-wrapper">
        <Title title="about me" />
        <AboutInfo />
        <StayConnected />
      </div>
    </div>
  );
}

export default About;
