import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	/*
	? This code is equivalent to the chain function below from lodash
	const userIds = _.uniq(_.map(getState().posts, "userId"));
	userIds.forEach(id => dispatch(fetchUser(id)));
	*/
	_.chain(getState().posts)
		.map("userId")
		.uniq()
		.forEach(id => dispatch(fetchUser(id)))
		.value(); // Value makes the chain be executed
};

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get("/posts");
	dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({ type: "FETCH_USER", payload: response.data });
};

/*
* USING MEMOIZE APPROACH TO SOLVE MULTIPLE FETCH
//! In order to memoize the function correctly it must be done this way, check
//! https://www.udemy.com/react-redux/learn/v4/t/lecture/12586922?start=0
//! IT IS CONFUSING AF
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: "FETCH_USER", payload: response.data });
});
*/
