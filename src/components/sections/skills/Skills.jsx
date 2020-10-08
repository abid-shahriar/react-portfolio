import React from "react";
import Skill from "../globals/Skill";
import Title from "../globals/Title";

function Skills() {
  return (
    <div className="section skills">
      <div className="section-wrapper">
        <Title title="some of my skills" />

        <div className="skills__container">
          <Skill name="html" icon="fas fa-code">
            I have a strong knowledge in html. I like using semantic html for
            better SEO friendly websites. I also know ejs and jsx which are used
            in node and react.
          </Skill>
          <Skill name="css" icon="fab fa-css3-alt">
            I absolutely love CSS. It becomes more fun with SASS and BEM.Like
            HTML, I also have a strong knowledge in CSS. I like to write modular
            and reusable css code.
          </Skill>
          <Skill name="js" icon="fab fa-node-js">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, quae!
          </Skill>
          <Skill name="react" icon="fab fa-react">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, quae!
          </Skill>
          <Skill name="node" icon="fab fa-node">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, quae!
          </Skill>
          <Skill name="wordpress" icon="fab fa-wordpress">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, quae!
          </Skill>
          <Skill name="cli" icon="fas fa-terminal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, quae!
          </Skill>
          <Skill name="git" icon="fab fa-git-alt">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, quae!
          </Skill>
          <Skill name="cpanel" icon="fab fa-cpanel">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, quae!
          </Skill>
        </div>
      </div>
    </div>
  );
}

export default Skills;
