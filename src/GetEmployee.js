import React, {Component} from 'react';
import './App.css';

class GetEmployee extends Component{
  render() {
  	const e = "hola";
  	return(
    	<ul>
         <li>{ e }</li>
      </ul>
   )
  }
}

export default GetEmployee;