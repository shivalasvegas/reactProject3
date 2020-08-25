import React from 'react';
import './App.css';


class stateComponent extends React.Component {
	constructor(){
		super();
		this.state={data:10};
		this.clickMethod2 = this.clickMethod2.bind(this);
	}
	clickMethod1(){
		alert("Hello");
	}
	clickMethod2(){
		this.setState=(
			{data:this.state.data+1}
		);
	}
	render(){
		return (
		<div>
			->data from state object={this.state.data}
			<br/>
			<button onClick={this.clickMethod1}>Click</button>
			<br/>
			<button onClick={this.clickMethod2}>Boom</button>
		</div>
		);
	}
  
}

export default stateComponent;
