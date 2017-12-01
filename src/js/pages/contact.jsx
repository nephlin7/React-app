import React from 'react';

export default class contact extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {value: ''};
  
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleChange(event) {
	  this.setState({value: event.target.value});
	}
  
	handleSubmit(event) {
      if(this.state.value === ''){
		alert("Enter a name");
	  }else{
		alert('A name was submitted: ' + this.state.value);
	  }

	  event.preventDefault();
	}
    // componentDidUpdate(event){
	// 	let mWrapp = document.getElementById("message");
	// 	mWrapp.html("Mensaje Enviado");
	// }
	render() {
	  return (
		<section>
			<h2 className="title">Contact US</h2>
			<form onSubmit={this.handleSubmit}>
			<div className="form-group label-floating">
				<label className="control-label">Enter yout Name</label>
				<input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
			</div>
		  <input className="btn btn-primary btn-raised" type="submit" value="Submit" />

		  <p id="message"></p>
		</form>
		</section>
	  );
	}
  }

