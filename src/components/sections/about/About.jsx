import React from "react";
import AboutEducation from "./AboutEducation";
import AboutInfo from "./AboutInfo";
import AboutMoreInfo from "./AboutMoreInfo";
import AboutSectionName from "./AboutSectionName";

function About() {
  return (
    <div className="section about" id="about">
      <div className="section-wrapper">
        <AboutSectionName />
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
