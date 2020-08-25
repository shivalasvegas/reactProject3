import React from 'react';
import './App.css';


class stateComponent extends React.Component {
	constructor(){
		super();
		this.state={data:10, length:1, width:2, area:0};
		this.clickMethod2 = this.clickMethod2.bind(this);
		this.clickMethod3 = this.clickMethod3.bind(this);
		this.clickMethod4 = this.clickMethod4.bind(this);
		this.clickMethod5 = this.clickMethod5.bind(this);
		this.clickMethod6 = this.clickMethod6.bind(this);
	}
	clickMethod1(){
		alert("Hello");
	}
	clickMethod2(){
		this.setState(
			{
				data:this.state.data+1,
				length:this.state.length+1,
				width:this.state.width+1

			}
		);
	}
	clickMethod3(){
		this.setState(
			{data:this.state.data-1}
		);
	}

	clickMethod4(){
		this.setState(
			{data:this.state.data*2}
		);
	}

	clickMethod5(){
		this.setState(
			{
				data:10,
				length:1,
				width:2
			}
		);
	}
	clickMethod6(){
		this.setState(
			{
				data:this.state.data*this.state.data,
				area:this.state.length*this.state.width

			}
		);
	}


	render(){
		return (
		<div>
			->data from state object={this.state.data}
			<br/>
			->length = {this.state.length} , width = {this.state.width}, area = {this.state.area}
			<br/>
			<button onClick={this.clickMethod1}>Click</button>
			<br/>
			<button onClick={this.clickMethod2}>Increase by 1</button>
			<br/>
			<button onClick={this.clickMethod3}>Decrease by 1 </button>
			<br/>
			<button onClick={this.clickMethod4}>Times 2</button>
			<br/>
			<button onClick={this.clickMethod5}>Reset</button>
			<br/>
			<button onClick={this.clickMethod6}>Square and area</button>
		</div>
		);
	}
  
}

export default stateComponent;
