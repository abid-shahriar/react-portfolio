import React from 'react';

import { motion } from 'framer-motion';

const motionAnimation = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5
		}
	}
};

function Skill({ name, children, icon }) {
	return (
		<motion.div variants={motionAnimation} className={name}>
			<div className='icon'>
				<i className={icon}></i>
			</div>
			<h3>{name}</h3>
			<div className='sub-skills'>{children}</div>
		</motion.div>
	);
}

export default Skill;
