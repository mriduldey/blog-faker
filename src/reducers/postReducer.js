import * as actions from "../actions/postActions";

export const initialState = {
  post: undefined,
  loading: false,
  hasErrors: false,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POST:
      return { ...state, loading: true };
    case actions.GET_POST_SUCCESS:
      return { ...state, post: action.payload, loading: false };
    case actions.GET_POST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
