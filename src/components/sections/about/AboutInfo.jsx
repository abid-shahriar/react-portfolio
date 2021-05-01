import React from 'react';
import { motion } from 'framer-motion';

const MotionAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function AboutInfo() {
  return (
    <motion.div className='about__info'>
      <motion.div variants={MotionAnimation} className='img'>
        <a href='https://abidshahriar.me/images/me.jpg'>
          <img src='/images/me.jpg' alt='abid shahriar' height='150px' width='150px' />
        </a>
      </motion.div>
      <motion.div variants={MotionAnimation} className='info'>
        <h2>
          Abid Shahriar <span>here,</span>
        </h2>
        <p>
          I'm 24 years old and I'm from Bogura, Bangladesh. Self-taught creative <span>Frontend Developer</span> offering 2+ years of experience.
          Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Aspiring to combine
          broad background with strong technical skills to excel as a Frontend Developer.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default AboutInfo;
