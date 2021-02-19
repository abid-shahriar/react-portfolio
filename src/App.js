import React, { useState } from 'react';
import { withRouter, useHistory, useLocation } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Loading from './components/fallbacks/Loading';

function App() {
	const [Toggle, setToggle] = useState(false);
	const [Loaded, setLoaded] = useState(false);

	const location = useLocation();
	const history = useHistory();

	window.addEventListener('click', (e) => {
		if (e.target.classList.contains('toggle-btn')) {
			return;
		} else {
			setToggle(false);
		}
	});

	const handleLeftBtn = () => {
		switch (location.pathname) {
			case '/contact':
				history.push('/projects');
				break;
			case '/projects':
				history.push('/skills');
				break;
			case '/skills':
				history.push('/');
				break;
			default:
				return null;
		}
	};
	const handleRightBtn = () => {
		switch (location.pathname) {
			case '/':
				history.push('/skills');
				break;
			case '/skills':
				history.push('/projects');
				break;
			case '/projects':
				history.push('/contact');
				break;
			default:
				return null;
		}
	};

	if (Loaded) {
		return (
			<>
				<div className='leftBtn' onClick={handleLeftBtn} style={{ color: `${location.pathname === '/' ? 'grey' : 'rgb(216, 216, 216)'}` }}>
					<i className='fas fa-chevron-left'></i>
				</div>
				<div className='rightBtn' onClick={handleRightBtn} style={{ color: `${location.pathname === '/contact' ? 'grey' : 'rgb(216, 216, 216)'}` }}>
					<i className='fas fa-chevron-right'></i>
				</div>
				<Nav Toggle={Toggle} setToggle={setToggle} />
				<Main Toggle={Toggle} setToggle={setToggle} />
			</>
		);
	} else {
		setTimeout(() => {
			setLoaded(true);
		}, 1000);

		return <Loading />;
	}
}

export default withRouter(App);
