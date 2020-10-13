import React from "react";
import { Link } from "react-router-dom";

function Project({ src, title, responsiveness, children }) {
  return (
    <div className="project">
      <img src={src} alt={src} />
      <div className="desc">
        <h3>{title}</h3>
        <p>{responsiveness}</p>
        <p>{children}</p>
      </div>
      <div className="btns">
        <Link>Code</Link>
        <Link>Demo</Link>
      </div>
    </div>
  );
}

export default Project;
