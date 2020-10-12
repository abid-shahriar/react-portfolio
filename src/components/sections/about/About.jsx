import React from "react";
import AboutEducation from "./AboutEducation";
import AboutInfo from "./AboutInfo";
import AboutMoreInfo from "./AboutMoreInfo";
import Title from "../globals/Title";


function About() {
  return (
    <div className="section about" id="about">
      <div className="section-wrapper">
        <Title title="about me" />
        <AboutInfo />
        <div className="row">
          <AboutMoreInfo />
          <AboutEducation />
        </div>
      </div>
    </div>
  );
}

export default About;
