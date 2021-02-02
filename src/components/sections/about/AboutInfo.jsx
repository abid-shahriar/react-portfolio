import React from 'react';
import myPic from '../../../asset/img/me.jpg';

function AboutInfo() {
	return (
		<div className='about__info'>
			<div className='img'>
				<img src={myPic} alt='abid shahriar' height='150px' width='150px' />
			</div>
			<div className='info'>
				<h2>I am Abid Shahriar,</h2>
				<p>I am a Web Designer and a front-end web developer with 2 years of experience. I like clean-reusable code and love to learn new things.</p>
			</div>
		</div>
	);
}

export default AboutInfo;
