export const ADD_TODO = 'ADD_TODO';
export const TOGG_COMPLETE = 'TOGG_COMPLETE';
export const REMOVE = 'REMOVE';


export const addTodo = (action) => {

	return {
		type: ADD_TODO,
		payload: {
			value: action,
			complete: false
		}
	}
}

export const togg_complete = (id) => {

	return {
		type: TOGG_COMPLETE,
		payload: {
			id: id,
			complete: true
		}
	}
}

export const remove = () => {

	return {
		type: REMOVE
	}

}

