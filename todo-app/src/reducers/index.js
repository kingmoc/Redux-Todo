


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
	//   console.log(state)
	switch (action.type) {
	 
	  
	  default:
		return state;
	}
  };
  