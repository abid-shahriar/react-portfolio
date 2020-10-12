import React from "react";
import AboutButtons from "./AboutButtons";

function AboutMoreInfo() {
  return (
    <div className="about__more-info-and-btns">
      <div className="about__more-info">
        <div className="birthday col">
          <p>
            <span>Birthday : </span> <span> 02 October</span>
          </p>
        </div>
        <div className="age col">
          <p>
            <span> Age: </span> <span> 20</span>
          </p>
        </div>
        <div className="website col">
          <p>
            <span> Website : </span> <span> abidshahriar.me</span>
          </p>
        </div>
        <div className="degree col">
          <p>
            <span>Degree : </span> <span> Drou-out</span>
          </p>
        </div>
        <div className="phone col">
          <p>
            <span>Phone : </span> <span> +8801726389558</span>
          </p>
        </div>

        <div className="counrty col">
          <p>
            <span>Country : </span> <span> Bangladesh</span>
          </p>
        </div>
        <div className="home-town col">
          <p>
            <span>Home Town : </span> <span> Bogura</span>
          </p>
        </div>
        <div className="email col">
          <p>
            <span>Email : </span> <span> abidshahriar7@gmail.com</span>
          </p>
        </div>
      </div>
      <AboutButtons />
    </div>
  );
}

export default AboutMoreInfo;
