import React from 'react';
import { Link } from 'react-router-dom';
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

function StayConnected() {
	return (
		<motion.div variants={MotionAnimation} className='stay-connected'>
			<div className='social-links'>
				<div id='fb'>
					<a href='https://facebook.com/abid.sh.akash' target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-facebook-f'></i>
					</a>
				</div>
				<div id='insta'>
					<a href='https://instagram.com/find.abid' target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-instagram-square'></i>
					</a>
				</div>
				<div id='ln'>
					<a href='https://linkedin.com/in/abidshahriar/' target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-linkedin'></i>
					</a>
				</div>
				<div id='gh'>
					<a href='https://github.com/abid-shahriar' target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-github-square'></i>
					</a>
				</div>
			</div>

			<div className='send-message'>
				<Link to='/contact'>send me a message</Link>
			</div>
		</motion.div>
	);
}

export default StayConnected;
