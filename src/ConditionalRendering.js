import React from 'react';
import './App.css';


class CondRender extends React.Component {

	constructor(){
		super();
        this.state=
        {
            isLoggedIn:true 
        };    	
    }

    clickMethod1 = ()=>{
        this.setState(
            {
                isLoggedIn:!this.state.isLoggedIn
            }
            );
    }
    render(){
        let message;
        if(this.state.isLoggedIn){
            message=<h3> Hello Shiva</h3>
        }
        else{
            message=<h3> Hello Guest</h3>
        }
        let message1= <div> {message} <button onClick={this.clickMethod1}> Click </button> </div>		
		return message1
		
    }
  
}

export default CondRender;
