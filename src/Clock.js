import React from 'react';
import './App.css';


class Clock extends React.Component {

	constructor(props){
		super(props);
        this.state=
        {
            date: new Date(), 
            text: "", 
            boolForShould: true
        };
        this.stateHandle1 = this.stateHandle1.bind(this);
        this.stateHandle2 = this.stateHandle2.bind(this);
        this.shouldHandle = this.shouldHandle.bind(this);
	
        console.log("Constructor sets the time as : "+ this.state.date);
		
    }
    
    stateHandle1 = () => {
        console.log("stateHandle sets the time as :" + this.state.date);
        this.setState({
            text: "Updated"
        });
    };
    
    stateHandle2 = () => {
        console.log("stateHandle2 sets the time as :" + this.state.date);
        clearInterval(this.timerID);
        this.setState({
            text: "Updated and timer has stopped"
        });
    };
    
    shouldHandle = () => {
        console.log("shouldHandle sets the time as :" + this.state.date);
        this.setState({
            boolForShould: !this.state.boolForShould
        });
    };
	
    componentWillMount(){
        console.log(`ComponentWillMount sets the time as` + this.state.date);
    }

    componentDidMount() {
        console.log("componentDidMount sets the time as :" + this.state.date);
        this.timerID = setInterval(()=>this.tick(), 1000);
    }
    
    componentWillUpdate() {
        console.log("componentWillUpdate sets the time as :" + this.state.date);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount sets the time as :" + this.state.date);
        clearInterval(this.timerID);
    }
      

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate sets the time as :" + this.state.date);
        return this.state.boolForShould;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate sets the time as :" + this.state.date);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
  
   
    

    render(){
		
		return(
			<div>
            <h1>{this.state.text}</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            <button onClick={this.stateHandle1}>Changes State</button>
            <button onClick={this.stateHandle2}> Changes State and stops timer </button>
            <button onClick={this.shouldHandle}> Changes shouldComponentUpdate </button>
        </div>
		);
    }
  
}

export default Clock;
