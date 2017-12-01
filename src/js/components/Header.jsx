import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({title}) => (
   <header>
   <nav className="navbar navbar-transparent navbar-absolute">
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navigation-example">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="http://www.creative-tim.com">G7 Dev</a>
      </div>
  
      <div className="collapse navbar-collapse" id="navigation-example">
        <ul className="nav navbar-nav navbar-right">
          <li>
          <Link className="nav-link" to="/">Home</Link> 
          </li>
          <li>
            <Link className="nav-link" to="/about">About</Link> 
          </li>
          <li>
            <Link className="nav-link" to="/contact">Contact</Link> 
          </li>
          <li>
            <a
              href="https://twitter.com/G7Dev"
              target="_blank"
              className="btn btn-simple btn-white btn-just-icon">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/G7Dev"
              target="_blank"
              className="btn btn-simple btn-white btn-just-icon">
              <i className="fa fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/G7Dev"
              target="_blank"
              className="btn btn-simple btn-white btn-just-icon">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
  <div className="header header-bg header-filter">
	<div className="container">
	  <div className="row">
		<div className="col-md-6">
		  <h1 className="title">Hello, world</h1>
		  <h4> This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.</h4>
		  <br/>
		  <a
			href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			className="btn btn-danger btn-raised btn-lg">
			<i className="fa fa-play"></i>
			Watch video
		  </a>
		</div>
	  </div>
	</div>
  </div> 
   </header>

);

export default Header;