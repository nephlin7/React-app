import React, {Component} from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './Main';

class App extends Component {
  componentDidMount() {
    const ele = document.getElementById('ipl-progress-indicator')
    if (ele) {
      setTimeout(() => {
        ele
          .classList
          .add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }, 1000)
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;