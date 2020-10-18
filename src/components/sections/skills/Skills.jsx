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
            <p>-Semantic HTML</p>
            <p>-EJS</p>
            <p>-JSX</p>
            <p>-PSD to HTML</p>
          </Skill>
          <Skill name="css" icon="fab fa-css3-alt">
            <p>-SASS</p>
            <p>-Bootstrap</p>
            <p>-BEM</p>
            <p>-Materialize</p>
          </Skill>
          <Skill name="js" icon="fab fa-node-js">
            <p>-ES5</p>
            <p>-ES6/ES6+</p>
            <p>-TypeScript</p>
            <p>-OOP</p>
          </Skill>
          <Skill name="react" icon="fab fa-react">
            <p>-ContextApi</p>
            <p>-Hooks</p>
            <p>-Next.js</p>
            <p>-Redux(basic)</p>
          </Skill>
          <Skill name="node" icon="fab fa-node">
            <p>-Express</p>
            <p>-Mongoose</p>
            <p>-CRUD Operation</p>
            <p>-Rest API</p>
          </Skill>
          <Skill name="wordpress" icon="fab fa-wordpress">
            <p>-Elementor</p>
            <p>-Theme Customization</p>
            <p>-Custom HTML, CSS, JS</p>
            <p>-Speed Optimization</p>
          </Skill>

          <Skill name="git" icon="fab fa-git-alt">
            <p>-Github</p>
            <p>-Clone/push/pull</p>
            <p>-Braches</p>
            <p>-github-pages</p>
          </Skill>
          <Skill name="cpanel" icon="fab fa-cpanel">
            <p>-Connecting Domains</p>
            <p>-Project Uploading</p>
            <p>-Subdomains</p>
            <p>-Redirects</p>
          </Skill>
          <Skill name="others" icon="fas fa-terminal">
            <p>-VS Code</p>
            <p>-Responsive Design</p>
            <p>-Netlify</p>
            <p>-Emmet</p>
          </Skill>
        </div>
      </div>
    </div>
  );
}

export default Skills;
