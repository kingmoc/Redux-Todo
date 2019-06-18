import React, { Component } from 'react';
import { connect } from 'react-redux';

import {  addTodo, remove } from '../actions'

class Form extends Component {

	state = {
		task: ""
	}

	handleChanges = e => {
		// console.log(this.state.task)
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addToList = e => {
		e.preventDefault()
		console.log(this.props.todo)
		this.props.addTodo(this.state.task)
		this.setState({
			task: ""
		})
	}

	remove = e => {
		console.log("remove works")
		this.props.remove()
	}

	render() {

		return (

			<div className="form">

				<form onSubmit={this.addToList}>

					<input 
					type="text"
					value={this.state.task}
					name="task"
					onChange={this.handleChanges}
					/>
					
					<button> Add to List</button>
					

				</form>

				<button onClick={this.remove}> Remove List </button>
				
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state.todo)

	return {
		todo: state.todo
	}
}

export default connect(mapStateToProps, { addTodo, remove })(Form);

