import React, { Component } from 'react';
import User from './User';

class users extends Component {
	state = {
		users: [
			{name:"Hitesh", age:20},
			{name:"Bunny", age:21},
			{name:"Ishaan", age:22},
			{name:"Karina", age:19},
		],
		title:"Users List all"
	};

	makeMe = () => {

		const newState = this.state.users.map((user)=>{
			const tempUser = user;
			tempUser.age -= 10;
			return tempUser;
		});
		this.setState({
			newState
		});
	}

	makeMec = () => {
		this.setState({
		users: [
			{name:"Hitesh", age:20},
			{name:"Bunny", age:21},
			{name:"Ishaan", age:22},
			]	
		})
	}

render(){
	return (<div>
		<br/>
		<button onClick={this.makeMe}>Make Us 10 year Younger</button>
		<button onClick={this.makeMec}>Make Us same again</button>
		<br/>
		<h1>{this.state.title}</h1>
		{
			this.state.users.map((user)=>{
				return <User age={user.age}>{user.name}</User>
			})
		}
		</div>)
	}
}

export default users;