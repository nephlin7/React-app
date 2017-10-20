import React from 'react';
import PageLink from './PageLink.js';
const home = () => ( <div>
	< PageLink title = "Home" />
	<div className="container">
		<div className="jumbotron">
		<h1 className="display-3">Hello, world to React </h1>
		<h2 className="display-4">from heroku Home!</h2>
		<p className="lead">This is a simple hero unit proyect with react, a simple jumbotron-style component for calling extra attention to featured content or information.</p><hr className="my-4"/><p>It uses utility classes for typography and spacing to space content out within the larger container.</p><p className="lead"><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p></div>
	</div>
 </div>
);
export default home;