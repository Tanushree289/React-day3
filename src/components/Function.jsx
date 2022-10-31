import React from 'react';
import ReactDOM from 'react-dom';

// Parent Component
class Parent extends React.Component{
	render(){
		return(
				<div style={{textAlign:"center"}}>
					<p>You are inside Parent Component</p>
					<Child name="User" userId = "5555"/>
				</div>
			);
	}
}

// Child Component
class Child extends React.Component{
	render(){
		return(
				<div style={{textAlign:"center"}}>
					<p>Hello, {this.props.name}</p>
					<p>You are inside Child Component</p>
					<p>Your user id is: {this.props.userId}</p>
				</div>
			);
	}
}

ReactDOM.render(
	// passing props
	<Parent />,
	document.getElementById("root")
);
 
export default Parent;