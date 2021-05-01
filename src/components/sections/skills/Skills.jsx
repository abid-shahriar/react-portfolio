import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import Skill from '../globals/Skill';
import Title from '../globals/Title';

const motionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Skills() {
  const history = useHistory();

  useEffect(() => {
    const about = document.getElementById('skills');

    about.addEventListener('swiped', (e) => {
      const swipeDir = e.detail.dir;

      if (swipeDir === 'right') {
        history.push('/');
      }
      if (swipeDir === 'left') {
        history.push('/projects');
      }
    });
  }, [history]);

  return (
    <div className='section skills' id='skills'>
      <div className='section-wrapper'>
        <Title title='some of my skills' />

        <motion.div variants={motionContainer} initial='hidden' animate='show' className='skills__container'>
          <Skill name='html' icon='fas fa-code'>
            <p>- HTML5</p>
            <p>- Semantic HTML</p>
            <p>- EJS</p>
            <p>- JSX</p>
          </Skill>

          <Skill name='css' icon='fab fa-css3-alt' delay={0.15}>
            <p>- SASS/SCSS</p>
            <p>- Bootstrap</p>
            <p>- BEM</p>
            <p>- Responsive Design</p>
          </Skill>
          <Skill name='js' icon='fab fa-node-js' delay={0.3}>
            <p>- ES5</p>
            <p>- ES6/ES6+</p>
            <p>- TypeScript</p>
            <p>- OOP</p>
          </Skill>
          <Skill name='react' icon='fab fa-react' delay={0.45}>
            <p>- NextJS</p>
            <p>- Redux</p>
            <p>- ContextApi</p>
            <p>- Hooks</p>
          </Skill>
          <Skill name='backend (basic)' icon='fab fa-node' delay={0.6}>
            <p>- NodeJS</p>
            <p>- Express</p>
            <p>- Mongoose</p>
            <p>- Rest API</p>
          </Skill>
          {/* <Skill name='wordpress' icon='fab fa-wordpress' delay={0.75}>
            <p>-Elementor</p>
            <p>-Theme Customization</p>
            <p>-Custom HTML, CSS, JS</p>
            <p>-Speed Optimization</p>
          </Skill> */}

          {/* <Skill name='git' icon='fab fa-git-alt' delay={0.9}>
            <p>-Github</p>
            <p>-Clone/push/pull</p>
            <p>-Braches</p>
            <p>-github-pages</p>
          </Skill> */}
          {/* <Skill name='cpanel' icon='fab fa-cpanel' delay={1.05}>
            <p>-Connecting Domains</p>
            <p>-Project Uploading</p>
            <p>-Subdomains</p>
            <p>-Redirects</p>
          </Skill> */}
          <Skill name='others' icon='fas fa-terminal' delay={0.75}>
            <p>- Git and Github</p>
            <p>- VS Code</p>
            <p>- Jira</p>
            <p>- Jenkins</p>
          </Skill>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
