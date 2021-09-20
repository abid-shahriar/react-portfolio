import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import Title from '../globals/Title';
import Project from '../globals/Project';

const ProjectMotionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Projects() {
  const history = useHistory();

  useEffect(() => {
    const about = document.getElementById('projects');

    about.addEventListener('swiped', (e) => {
      const swipeDir = e.detail.dir;

      if (swipeDir === 'right') {
        history.push('/skills');
      }
      if (swipeDir === 'left') {
        history.push('/contact');
      }
    });
  }, [history]);

  return (
    <div className='section projects' id='projects'>
      <div className='section-wrapper'>
        <Title title='some of my projects' />

        <motion.div variants={ProjectMotionContainer} initial='hidden' animate='show' className='projects-container'>
          <Project
            src='/images/cryptosphere.jpg'
            title='Crypto Sphere'
            responsiveness='full-responsive'
            details='Build With NextJS with the help of Coinranking Api from RapidApi. Used ISR(Incremental Static Regeneration) and redux  for speed and performance.'
            code='https://github.com/abid-shahriar/crypto-sphere'
            demo='https://cryptosphere.netlify.app'
          ></Project>

          <Project
            src='/images/puzzle-game.jpg'
            title='Image Puzzle'
            responsiveness='not supported on touch devices'
            details='Puzzle game built with HTML, CSS(SCSS), JavaScript(TypeScript). No extra library/framework used, Have fun.'
            code='https://github.com/abid-shahriar/puzzle-game'
            demo='https://imagepuzzle.netlify.app'
          ></Project>

          <Project
            src='/images/foodOClock.jpg'
            title="food O'Clock"
            responsiveness='full-responsive'
            details='Simple restaurant website built with html, css, scss, javascript, it is using api call to get the menu items'
            code='https://github.com/abid-shahriar/restaurant-website'
            demo='https://food-o-clock.netlify.app'
          ></Project>

          {/* <Project
            src='/images/portfolio.jpg'
            title='Static Portfolio'
            responsiveness='full-responsive'
            details='A simple static portfolio website built with html, css, scss, javascript.'
            code='https://github.com/abid-shahriar/portfolio'
            demo='https://abid-shahriar.netlify.app'
          ></Project> */}

          <Project
            src='/images/css-position.jpg'
            title='CSS Position GUI'
            responsiveness='full-responsive'
            details='A Graphical User Interface(GUI) to play with CSS position property. Built with react and ContextApi.'
            code='https://github.com/abid-shahriar/react-css-position-gui'
            demo='https://abid-shahriar.github.io/react-css-position-gui'
          ></Project>

          {/* <Project
            src='/images/todoApp.jpg'
            title='ToDo App'
            responsiveness='full-responsive'
            details='Simple ToDo app, built with html, css and vanilla javascript.'
            code='https://github.com/abid-shahriar/toDo-app'
            demo='https://abid-shahriar.github.io/toDo-app'
          ></Project> */}
          <Project
            src='/images/wikiance.jpg'
            title='wikiance'
            responsiveness='full-responsive'
            details='Portfolio website of the company I work for. Built with NextJS and Typescript. It is super fast and SEO friendly.'
            // code='https://github.com/abid-shahriar/toDo-app'
            demo='https://wikiance.com'
          ></Project>

          <Project
            src='/images/simple-photo-editor.jpg'
            title='Photo Editor'
            responsiveness='full-responsive'
            details='Photo editor tool to play with CSS filter property. Built with react and ContextApi.'
            code='https://github.com/abid-shahriar/simple-photo-editor'
            demo='https://abid-shahriar.github.io/simple-photo-editor'
          ></Project>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
