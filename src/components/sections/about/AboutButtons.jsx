import React from "react";
import { Link } from "react-router-dom";

function AboutButtons() {
  return (
    <div className="about__btns">
      <Link to="/contact">Send Me a Message</Link>
      <a
        href="https://github.com/abid-shahriar"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Github Profile
      </a>
    </div>
  );
}

export default AboutButtons;
