import React from 'react';
import { motion } from 'framer-motion';

import AboutInfo from './AboutInfo';
import StayConnected from './StayConnected';
import RouteChange from '../globals/RouteChange';

const MotionContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
};

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

function About() {
	return (
		<div className='section about' id='about'>
			<motion.div variants={MotionContainer} initial='hidden' animate='show' className='section-wrapper'>
				<AboutInfo />
				<StayConnected />

				<motion.a variants={MotionAnimation} className='cv-btn' href='/abid-cv.pdf'>
					Download CV
				</motion.a>
			</motion.div>
		</div>
	);
}

export default About;
