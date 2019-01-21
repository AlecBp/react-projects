// default to empty array. First time it is called it will not be undefined
export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_POSTS": {
			return action.payload;
		}
		default: {
			// Must return state even if no changed, otherwise it returns undefined
			return state;
		}
	}
};
