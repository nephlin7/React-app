import React from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
// export default App;
const PageLink = ({
    title
  }) => (
    <div className="App">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
         <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
         <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
  </div>
</nav>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
    </div>);

export default PageLink;