import React from "react";
import myPic from "../../../asset/img/me-2.jpg";

function AboutInfo() {
  return (
    <div className="about__info">
      <div className="img">
        <img src={myPic} alt="abid shahriar" />
      </div>
      <div className="info">
        <h2>I am Abid Shahriar,</h2>
        <p>
          I am a Web Designer and a front-end web developer. I'm very passionate
          and dedicated to my work. With 2 years of experience as a Web Designer
          and Front-End Developer, I have acquired the skills and knowledge
          necessary to make a project a succes. I enjoy every step of my work,
          from discussion to collaboration. I love clean code and I try my best
          to write clean and reusable code.
        </p>
      </div>
    </div>
  );
}

export default AboutInfo;
