// Define Redux action types
export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILURE = "GET_POST_FAILURE";

// Create redux action creators that return an action
export const getPost = () => ({
  type: GET_POST,
});

export const getPostSuccess = post => ({
  type: GET_POST_SUCCESS,
  payload: post,
});

export const getPostfailure = () => ({
  type: GET_POST_FAILURE,
});

// Combine them all in a asynchronous thunk
export function fetchPost(postId) {
  return async dispatch => {
    dispatch(getPost());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );
      const post = await response.json();

      dispatch(getPostSuccess(post));
    } catch (error) {
      dispatch(getPostfailure());
    }
  };
}
