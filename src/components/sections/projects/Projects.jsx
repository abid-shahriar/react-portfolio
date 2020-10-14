import React from "react";
import Title from "../globals/Title";
import Project from "../globals/Project";
import analogClock from "../../../asset/img/analogClock.jpg";
import cssPosition from "../../../asset/img/css-position.jpg";
import foodOClock from "../../../asset/img/foodOClock.jpg";
import todoApp from "../../../asset/img/todoApp.jpg";
import pigGame from "../../../asset/img/pig-game.jpg";
import simplePhotoEditor from "../../../asset/img/simple-photo-editor.jpg";

function Projects() {
  return (
    <div className="section projects">
      <div className="section-wrapper">
        <Title title="some of my projects" />

        <div className="projects-container">
          <Project
            src={analogClock}
            title="analog clock"
            responsiveness="full-responsive"
            code="https://github.com/abid-shahriar/analog-clock"
            demo="https://abid-shahriar.github.io/analog-clock/"
          >
            An analog-clock with random color generator built with HTML, CSS and
            Vanilla-JavaScript.
          </Project>

          <Project
            src={foodOClock}
            title="food O'Clock"
            responsiveness="full-responsive"
            code="https://github.com/abid-shahriar/restaurant-website"
            demo="https://food-o-clock.netlify.app/"
          >
            A simple restaurant website built with HTML, CSS &
            Vanilla-JavaScript. The food menu is generated from a food api.
          </Project>

          <Project
            src={pigGame}
            title="Pig Game"
            responsiveness="not-responsive"
            code="https://github.com/abid-shahriar/pig-game"
            demo="https://abid-shahriar.github.io/pig-game"
          >
            pig game with a dice. built with HTML, CSS & Vanilla-JavaScript and
            you can set the winnig score.
          </Project>

          <Project
            src={cssPosition}
            title="CSS Position GUI"
            responsiveness="full-responsive"
            code="https://github.com/abid-shahriar/react-css-position-gui"
            demo="https://abid-shahriar.github.io/react-css-position-gui"
          >
            Created with React. Used react-hooks and contexApi with UseContex
            for satate-management.
          </Project>

          <Project
            src={todoApp}
            title="ToDo App"
            responsiveness="full-responsive"
            code="https://github.com/abid-shahriar/toDo-app"
            demo="https://abid-shahriar.github.io/toDo-app/"
          >
            Simple To-Do app built with HTML, CSS and Vanilla-JavaScript with
            local storage support.
          </Project>

          <Project
            src={simplePhotoEditor}
            title="Photo Editor"
            responsiveness="full-responsive"
            code="https://github.com/abid-shahriar/simple-photo-editor"
            demo="https://abid-shahriar.github.io/simple-photo-editor/"
          >
            A photo editor built with react. It can generate a random image from
            unsplash and the image can be edited with css filter manupulation.
          </Project>
        </div>
      </div>
    </div>
  );
}

export default Projects;
