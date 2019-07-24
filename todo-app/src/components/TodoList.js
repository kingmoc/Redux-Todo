import React from 'react';
import { connect } from 'react-redux';

import { togg_complete, delete_one } from '../actions'



const TodoList = (props) => {
	// console.log(props.todo)


	const strike = e => {
		console.log(e.target.className)
		props.togg_complete(e.target.value)
	}

	const deleteOne = e => {
		e.preventDefault()
		props.delete_one(e.target.value)
		// console.log(e.target.value)

	}
	
	return (
		
		<div className="list">
			<h1> List of Things to do! </h1>

			{props.todo.map((action,i) => {
				return (
					<ul key={i}>
						<li
						className={action.complete ? 'strike' : 'list-item'}
						value={i} 
						onClick={strike}
						> 
						{action.value} 
						</li>
						<button value={i} onClick={deleteOne}>Delete</button>
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

export default connect(mapStateToProps, { togg_complete, delete_one })(TodoList);

