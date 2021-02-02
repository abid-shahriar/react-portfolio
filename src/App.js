import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Loading from './components/fallbacks/Loading';

function App() {
	const [Toggle, setToggle] = useState(false);
	const [Loaded, setLoaded] = useState(false);

	window.addEventListener('click', (e) => {
		if (e.target.classList.contains('toggle-btn')) {
			return;
		} else {
			setToggle(false);
		}
	});

	if (Loaded) {
		return (
			<>
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
