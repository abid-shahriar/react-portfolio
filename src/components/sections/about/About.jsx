import React from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import AboutInfo from './AboutInfo';
import StayConnected from './StayConnected';
import { useEffect } from 'react';

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
	const history = useHistory();

	useEffect(() => {
		const about = document.getElementById('about');

		about.addEventListener('swiped', (e) => {
			const swipeDir = e.detail.dir;

			if (swipeDir === 'left') {
				history.push('/skills');
			}
		});
	}, [history]);

	return (
		<div className='section about' id='about'>
			<motion.div variants={MotionContainer} initial='hidden' animate='show' className='section-wrapper'>
				<AboutInfo />
				<StayConnected />

				<motion.a variants={MotionAnimation} className='cv-btn' href='/abid-cv.pdf'>
					Download Resume
				</motion.a>
			</motion.div>
		</div>
	);
}

export default About;
