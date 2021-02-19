import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import Title from '../globals/Title';

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

function Contact() {
	const history = useHistory();

	useEffect(() => {
		const about = document.getElementById('contact');

		about.addEventListener('swiped', (e) => {
			const swipeDir = e.detail.dir;

			if (swipeDir === 'right') {
				history.push('/projects');
			}
		});
	}, [history]);
	return (
		<div className='section contact' id='contact'>
			<div className='section-wrapper'>
				<Title title='send me a message' />
				<div className='contact-form'>
					<motion.form variants={MotionContainer} initial='hidden' animate='show' name='port-contact' method='post' autoComplete='off'>
						<input type='hidden' name='form-name' value='port-contact' />

						<motion.div variants={MotionAnimation} className='name-box'>
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' placeholder='name' required />
						</motion.div>

						<motion.div variants={MotionAnimation} className='email-box'>
							<label htmlFor='email'>Email</label>
							<input type='email' name='email' placeholder='email' required />
						</motion.div>

						<motion.div variants={MotionAnimation} className='message-box'>
							<label htmlFor='message'>Your message...</label>
							<textarea name='message' id='' cols='30' rows='10' placeholder='your message...' required></textarea>
						</motion.div>
						<motion.div variants={MotionAnimation} className='submit-and-email'>
							<button type='submit'>Send Message</button>
							<span>or</span>
							<a className='email-me-btn' href='mailto: abidshahriar7@gmail.com'>
								Send an Email
							</a>
						</motion.div>
					</motion.form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
