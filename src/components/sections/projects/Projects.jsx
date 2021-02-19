import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import Title from '../globals/Title';
import Project from '../globals/Project';
import analogClock from '../../../asset/img/analogClock.jpg';
import cssPosition from '../../../asset/img/css-position.jpg';
import foodOClock from '../../../asset/img/foodOClock.jpg';
import todoApp from '../../../asset/img/todoApp.jpg';
import portfolio from '../../../asset/img/portfolio.jpg';
import simplePhotoEditor from '../../../asset/img/simple-photo-editor.jpg';

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
						src={analogClock}
						title='analog clock'
						responsiveness='full-responsive'
						code='https://github.com/abid-shahriar/analog-clock'
						demo='https://abid-shahriar.github.io/analog-clock/'
					></Project>

					<Project
						src={foodOClock}
						title="food O'Clock"
						responsiveness='full-responsive'
						code='https://github.com/abid-shahriar/restaurant-website'
						demo='https://food-o-clock.netlify.app/'
					></Project>

					<Project
						src={portfolio}
						title='Static Portfolio'
						responsiveness='full-responsive'
						code='https://github.com/abid-shahriar/portfolio'
						demo='https://abid-shahriar.netlify.app/'
					></Project>

					<Project
						src={cssPosition}
						title='CSS Position GUI'
						responsiveness='full-responsive'
						code='https://github.com/abid-shahriar/react-css-position-gui'
						demo='https://abid-shahriar.github.io/react-css-position-gui'
					></Project>

					<Project
						src={todoApp}
						title='ToDo App'
						responsiveness='full-responsive'
						code='https://github.com/abid-shahriar/toDo-app'
						demo='https://abid-shahriar.github.io/toDo-app/'
					></Project>

					<Project
						src={simplePhotoEditor}
						title='Photo Editor'
						responsiveness='full-responsive'
						code='https://github.com/abid-shahriar/simple-photo-editor'
						demo='https://abid-shahriar.github.io/simple-photo-editor/'
					></Project>
				</motion.div>
			</div>
		</div>
	);
}

export default Projects;
