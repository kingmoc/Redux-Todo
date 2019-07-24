import { ADD_TODO, TOGG_COMPLETE, REMOVE, DELETE_ONE } from '../actions'


const initialState = {
	todo: [
		{
		value: "Take out the Trash",
		complete: false
		},
		{
		value: "Study Redux",
		complete: false
		}
	]
  }
  
 
  export default (state = initialState, action) => {
	// console.log(action.payload)
	switch (action.type) {
		
		case ADD_TODO:
			return {
				todo: [...state.todo, action.payload]
			}
		
		case TOGG_COMPLETE:
			// console.log(state)
			state.todo[action.payload.id].complete = !state.todo[action.payload.id].complete

			return {
				todo: [...state.todo]
			}

		case REMOVE: 			
			let filterList = state.todo.filter(todo => todo.complete === false )
			console.log(filterList)
			console.log(state.todo)

			return {
				todo: [...filterList]
				// ...filterList
			}
		
		case DELETE_ONE:
			console.log(action.payload)
			// todo[i] !== todo[action.payload]
			let delOne = state.todo.filter((todo, i, array) => todo !== array[action.payload])
			console.log(delOne)
			console.log(state.todo)

			return {
				...state,
				todo: [...delOne]
			}

	  
	  default:
		return state;
	}
  };
  