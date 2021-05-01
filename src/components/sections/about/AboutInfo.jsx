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
        <h2>Abid Shahriar here,</h2>
        <p>
          I'm a 25 years old self-taught <span>Frontend Developer</span> based in Bangladesh. I like frontend because of the combination of design and
          logic. Got 2+ years of experience. I like clean and reusable code and like to learn new skills.{' '}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default AboutInfo;
