import React from "react";
import AboutButtons from "./AboutButtons";

function AboutMoreInfo() {
  return (
    <div className="about__more-info-and-btns">
      <div className="about__more-info">
        <div className="birthday col">
          <h3>
            Birthday : <span>02 October</span>
          </h3>
        </div>
        <div className="age col">
          <h3>
            Age: <span>20</span>
          </h3>
        </div>
        <div className="website col">
          <h3>
            Website : <span>abidshahriar.netlify.app</span>
          </h3>
        </div>
        <div className="email col">
          <h3>
            Email : <span>abidshahriar7@gmail.com</span>
          </h3>
        </div>
        <div className="degree col">
          <h3>
            Degree : <span>Drou-out</span>
          </h3>
        </div>
        <div className="phone col">
          <h3>
            Phone : <span>+8801726389558</span>
          </h3>
        </div>
        <div className="counrty col">
          <h3>
            Country : <span>Bangladesh</span>
          </h3>
        </div>
        <div className="home-town col">
          <h3>
            Home Town : <span>Bogura Sadar, Bogura</span>
          </h3>
        </div>
      </div>
      <AboutButtons />
    </div>
  );
}

export default AboutMoreInfo;
