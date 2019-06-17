import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
	// console.log(props.todo)
	
	return (
		
		<div className="list">
			<h1> List of Things to do! </h1>

			{props.todo.map((action,i) => {
				return (
					<ul key={i}>
						<li> {action.value} </li>
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

export default connect(mapStateToProps, {})(TodoList);

