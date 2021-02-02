import React from 'react';

import AboutInfo from './AboutInfo';
import StayConnected from './StayConnected';
import RouteChange from '../globals/RouteChange';

function About() {
	return (
		<div className='section about' id='about'>
			<div className='section-wrapper'>
				<AboutInfo />
				<StayConnected />

				<a className='cv-btn' href='/abid-cv.pdf'>
					Download CV
				</a>

				<RouteChange next='Skills' nextPath='/skills' />
			</div>
		</div>
	);
}

export default About;
