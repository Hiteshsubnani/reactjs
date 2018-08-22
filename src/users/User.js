import React from 'react';

const User = (props) => {
	let age = props.age ? props.age : 'NA';
	if(props.children)
	{


	return ( <div>Hello <b>{props.children}</b> Your Age is : <b>{age}</b></div>)
	}
	else{
		return <div>Invalid Entry</div>
	}
}

export default User;