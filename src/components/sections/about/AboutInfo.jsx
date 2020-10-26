import React from "react";
import myPic from "../../../asset/img/me.jpg";

function AboutInfo() {
  return (
    <div className="about__info">
      <div className="img">
        <img src={myPic} alt="abid shahriar" height="150px" width="150px" />
      </div>
      <div className="info">
        <h2>I am Abid Shahriar,</h2>
        <p>
          I am a Web Designer and a front-end web developer. With 2 years of
          experience as a Web Designer and Front-End Developer, I have acquired
          the skills and knowledge necessary to make a project a succes.I love
          clean code and I try my best to write clean and reusable code.
        </p>
      </div>
    </div>
  );
}

export default AboutInfo;
