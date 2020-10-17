import React from "react";

function Project({ src, title, responsiveness, children, code, demo }) {
  return (
    <div className="project">
      <img src={src} alt={src} />
      <div className="decs-and-btns">
        <div className="desc">
          <h3>{title}</h3>
          <p>{responsiveness}</p>
          <p>{children}</p>
        </div>
        <div className="btns">
          <a href={code} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github-alt"></i>
            Code
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <i class="far fa-eye"></i>
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
