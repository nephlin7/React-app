import React from 'react';
import Result from '../components/Result.jsx';
const SEARCH = '//api.github.com/search/repositories';
const QDEFAULT = 'react';


export default class About extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			results: [],
			q: '',
			message: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	fetchData(q) {
		fetch(`${SEARCH}?q=${q}`)
		.then(r => r.json())
		.then(json => {
		  this.setState({
			results: (json && json.items) || []
		  });
		});
	  }
	handleChange(event) {
		this.setState({
			q: event.target.value
		});
		console.log(`change q state a: ${this.state.q}`)
	}
	onSubmit(event){
		this.fetchData(this.state.q);
		if(this.state.results === ''){
			this.setState({
				message: 'Empty result'
			})
		}
		event.preventDefault();
		
	}
	componentDidMount() {
		this.fetchData(QDEFAULT);
	  }
	  render() {
		const { results } = this.state;
		return (
		  <div>
			<h1>Github Repositories</h1>
			<form onSubmit={this.onSubmit}>
				<div className="form-group label-floating">
					<label className="control-label">Buscar Repo</label>
					<input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
				</div>
				<input className="btn btn-primary btn-raised" type="submit" value="Submit" />
			</form>
			<div className="list">
			  {results.map(result => 
				<Result key={result.id} result={result} />
			  )}
			  <span>{this.state.message}</span>
			</div>
		  </div>
		);
	  }
}


