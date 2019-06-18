import { ADD_TODO, TOGG_COMPLETE, REMOVE } from '../actions'


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
	console.log(action.payload)
	switch (action.type) {
		
		case ADD_TODO:
			return {
				...state, todo: [...state.todo, action.payload]
			}
		
		case TOGG_COMPLETE:
			// console.log(state)

			state.todo[action.payload.id].complete = state.todo[action.payload.id].complete ? false : true;

			return {
				todo: [...state.todo]
			}

		case REMOVE: 
			
			return {
				state
			}

			
	  
	  default:
		return state;
	}
  };
  