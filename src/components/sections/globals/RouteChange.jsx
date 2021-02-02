import React from 'react';
import { Link } from 'react-router-dom';

const RouteChange = ({ prev, next, nextPath, prevPath }) => {
	return (
		<div className='routeChange'>
			{prev && (
				<Link to={prevPath}>
					<p>&larr; {prev}</p>
				</Link>
			)}

			{next && (
				<Link to={nextPath}>
					<p>{next} &rarr;</p>
				</Link>
			)}
		</div>
	);
};

export default RouteChange;
