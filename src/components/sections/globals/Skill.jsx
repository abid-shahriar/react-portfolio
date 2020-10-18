import React from "react";

function Skill({ name, children, icon }) {
  return (
    <div className={name}>
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h3>{name}</h3>
      <div className="sub-skills">{children}</div>
    </div>
  );
}

export default Skill;
