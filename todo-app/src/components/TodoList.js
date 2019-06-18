import React from 'react';
import { connect } from 'react-redux';

import { togg_complete } from '../actions'



const TodoList = (props) => {
	// console.log(props.todo)


	const strike = e => {
		console.log(e.target.className)
		props.togg_complete(e.target.value)
		// console.log(props.todo[e.target.value].complete)

		e.target.className = props.todo[e.target.value].complete ? 'strike' : null

	}
	
	return (
		
		<div className="list">
			<h1> List of Things to do! </h1>

			{props.todo.map((action,i) => {
				return (
					<ul key={i}>
						<li
						// className="strike"
						value={i} 
						onClick={strike}
						> 
						{action.value} 
						</li>
					</ul>
				)
			})}

		</div>		

	)
	
};

const mapStateToProps = (state) => {
	// console.log(state.todo)

	return {
		todo: state.todo
	}
}

export default connect(mapStateToProps, {togg_complete})(TodoList);

