import React from 'react';
import { motion } from 'framer-motion';

const projectMotionAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function Project({ src, title, responsiveness, children, code, demo, details }) {
  return (
    <motion.div variants={projectMotionAnimation} className='project'>
      <img src={src} alt={src} />
      <div className='desc-and-btns'>
        <div className='desc'>
          <h3>{title}</h3>
          <p>{responsiveness}</p>
        </div>
        <div className='details'>
          <p>{details}</p>
        </div>
        <div className='btns'>
          {code && (
            <a href={code} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-github-alt'></i>
              Code
            </a>
          )}

          <a href={demo} target='_blank' rel='noopener noreferrer'>
            <i className='far fa-eye'></i>
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
