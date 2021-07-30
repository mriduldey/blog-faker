// Define Redux action types
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

// Create redux action creators that return an action
export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersfailure = () => ({
  type: GET_USERS_FAILURE,
});

// Combine them all in a asynchronous thunk
export function fetchUsers() {
  return async dispatch => {
    dispatch(getUsers());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      dispatch(getUsersSuccess(users));
    } catch (error) {
      dispatch(getUsersfailure());
    }
  };
}
