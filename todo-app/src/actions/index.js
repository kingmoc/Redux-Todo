

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (action) => {
	
	return {
		type: ADD_TODO,
		payload: {
			value: action,
			complete: false
		}
	}
}

export const TOGG_COMPLETE = 'TOGG_COMPLETE';
export const togg_complete = (id) => {
	
	return {
		type: TOGG_COMPLETE,
		payload: {
			id: id,
			complete: true
		}
	}
}

export const REMOVE = 'REMOVE';
export const remove = () => {

	return {
		type: REMOVE
	}
}

export const DELETE_ONE = 'DELETE_ONE';
export const delete_one = (id) => {

	return {
		type: DELETE_ONE,
		payload: id 
	}
}

