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
          <Skill name="javaScript" icon="fab fa-node-js">
            I have pretty strong knowledge in JavaScript. I aslo use TypeScript and compile it to ES2014 for better browser support. I like using modern js featured like destructuring, spread, arrow functions etc.
          </Skill>
          <Skill name="react" icon="fab fa-react">
            React changed my way of creating modern websites. I generally use functional components with react hooks but I am aslo familiar with class based components. I like to use ContextApi for state management instead of redux as redux has a preety complex setup for normal projects.
          </Skill>
          <Skill name="node" icon="fab fa-node">
            I have basic knowledge of NODE. I can create a server with node and listen to get/post/detele/put requests. I like to use express with mongoose for creating a server and save/delete/update/read data from the database.  
          </Skill>
          <Skill name="wordpress" icon="fab fa-wordpress">
             To be honest, I actually don't like wordress that much bt I know the basics of wordress. I can create a website with any page-builder tool like elomentor. Can customise any theme and can add custom html, css and JavaScript.
          </Skill>
          <Skill name="cli" icon="fas fa-terminal">
            As a developer I think Knowing Command Line Interface(CLI) is a must as we have to install pacages and pull-push git repo all the time using terminal. Using cli is really faster in this cases than Graphical User Interface(GUI). And using CLI gives a hacker vibe I guess. :)
          </Skill>
          <Skill name="git" icon="fab fa-git-alt">
            Git with Github is a killer combo for me. I have intermediate level of knowledge in git and github. It feels good when my codes are storted in a cloud server and I can access my codes from anywhere. And I also like github pages for testing my projects and show them to others.
          </Skill>
          <Skill name="cpanel" icon="fab fa-cpanel">
            Knowing cpanel is also a must for developers I think. I am not an expert bt I have the basic knowledge of cpanel like uploading a project, adding doamin to the server, creating subdomains, managing redirects, installing wordress etc etc.
          </Skill>
        </div>
      </div>
    </div>
  );
}

export default Skills;
