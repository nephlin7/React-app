import React from 'react';
import {Link} from 'react-router-dom';

let year = (new Date().getFullYear());
const Footer = () => (
    <footer className="footer">
        <div className="container">
            <nav className="pull-left">
                <ul>
                <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/About">About Us</Link>
                    </li>
                    <li>
                    <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="copyright pull-right">
                &copy; {year}, made with <i className="fa fa-heart heart"> </i> by G7 dev
            </div>
        </div>
    </footer>
);

export default Footer;
