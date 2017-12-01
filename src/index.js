import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './css/index.css';
import App from './js/App.js';

ReactDOM.render(
    <BrowserRouter>
    <App/>
</BrowserRouter>, document.getElementById('app'));
