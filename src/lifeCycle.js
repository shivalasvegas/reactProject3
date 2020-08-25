import React from 'react';
import './App.css';


class LifeCycle extends React.Component {

	constructor(){
		super();
		this.state={data:10};
		this.clickMethod = this.clickMethod.bind(this);
	}
	
	clickMethod(){
		alert("Hello")
		this.setState(
			{data:parseInt(this.state.data)+1}
		);
	}

	componentWillMount(){
		this.setState(
			{data:parseInt(this.state.data)*2}
			);
		}
	

render(){
		
		return(
			<div>
				->Data = {this.state.data}
				<br/>
				<button onClick={this.clickMethod}> Click </button>
			
			</div>
		);
	}
  
}

export default LifeCycle;
