import React from 'react';
import { motion } from 'framer-motion';

import myPic from '../../../asset/img/me.jpg';

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
				<img src={myPic} alt='abid shahriar' height='150px' width='150px' />
			</motion.div>
			<motion.div variants={MotionAnimation} className='info'>
				<h2>I am Abid Shahriar,</h2>
				<p>I am a Web Designer and a front-end web developer with 2 years of experience. I like clean-reusable code and love to learn new things.</p>
			</motion.div>
		</motion.div>
	);
}

export default AboutInfo;
