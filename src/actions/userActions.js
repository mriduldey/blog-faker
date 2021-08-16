// Define Redux action types
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

// Create redux action creators that return an action
export const getUser = () => ({
  type: GET_USER,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUserfailure = () => ({
  type: GET_USER_FAILURE,
});

// Combine them all in a asynchronous thunk
export function fetchUser(userId) {
  return async dispatch => {
    dispatch(getUser());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + userId
      );
      const user = await response.json();
      dispatch(getUserSuccess(user));
    } catch (error) {
      dispatch(getUserfailure());
    }
  };
}
