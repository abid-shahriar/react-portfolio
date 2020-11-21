import React from "react";
import AboutInfo from "./AboutInfo";
import StayConnected from "./StayConnected";

function About() {
  return (
    <div className="section about" id="about">
      <div className="section-wrapper">
        <AboutInfo />
        <StayConnected />
      </div>
    </div>
  );
}

export default About;
