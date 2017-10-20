import React, {Component} from 'react';
import { Router, browserHistory, Route } from 'react-router';
import home from './home.js';
import About from './About.js';
import './App.css';




// export default App;
// const PageLink = ({ title }) => (
//     <div className="App">
//       <div className="App-header">
//       
//         <h2>{title}</h2>
//       </div>
//       <p className="App-intro">
//         This is the {title} page.
//       </p>
//       <p>
//         <Link to="/">Home</Link>
//       </p>
//       <p>
//         <Link to="/about">About</Link>
//       </p>
//       <p>
//         <Link to="/settings">Settings</Link>
//       </p>
//     </div>
// );

// const Home = (props) => (
//   <PageLink title="Home"/>
// );

// const About = (props) => (
//   <PageLink title="About"/>
// );

// const Settings = (props) => (
//   <PageLink title="Settings"/>
// <Route path="/settings" component={Settings}/>
// );

class App extends Component {
  render() {
    return (
        <div>
          <Router history={browserHistory}>
            <Route path="/" component={home}/>
            <Route path="/about" component={About}/>
          </Router>
      </div>
    );
  }
}

export default App;