import React from 'react';
import { Link } from 'react-router-dom';

function StayConnected() {
	return (
		<div className='stay-connected'>
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
		</div>
	);
}

export default StayConnected;
