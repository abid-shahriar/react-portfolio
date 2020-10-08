import React from "react";

function Skill({ name, children, icon }) {
  return (
    <div className={name}>
      <div className="icon">
        <i class={icon}></i>
      </div>
      <h3>{name}</h3>
      <p>{children}</p>
    </div>
  );
}

export default Skill;
