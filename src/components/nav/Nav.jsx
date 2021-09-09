import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Nav(props) {
	let locationPath = props.location.pathname;

	const navItems = [
		{
			id: 1,
			name: 'about',
			icon: 'nav-icon fas fa-user-alt',
			to: '/'
		},
		{
			id: 2,
			name: 'skills',
			icon: 'nav-icon fas fa-cogs',
			to: '/skills'
		},
		{
			id: 3,
			name: 'projects',
			icon: 'nav-icon fas fa-briefcase',
			to: '/projects'
		},
		{
			id: 5,
			name: 'contact',
			icon: 'nav-icon fas fa-id-card',
			to: '/contact'
		}
	];

	const handelToggle = (e) => {
		props.setToggle(!props.Toggle);
	};

	return (
		<nav id='nav' className={props.Toggle ? 'toggle nav' : 'nav'}>
			<ul className='nav-menu'>
				<div className='toggle-btn' onClick={handelToggle}>
					<p></p>
					<p></p>
					<p></p>
				</div>
				<div className='menu-items'>
					{navItems.map((item) => (
						<li className={locationPath === item.to ? 'active-nav' : ''} key={item.id}>
							<Link to={item.to}>
								<i className={item.icon}></i>
								{item.name}
							</Link>
						</li>
					))}
				</div>
			</ul>

			{/* <div className="footer-text">
        <p>Visit my github profile</p>

        <a
          href="https://github.com/abid-shahriar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div> */}
		</nav>
	);
}

export default withRouter(Nav);
