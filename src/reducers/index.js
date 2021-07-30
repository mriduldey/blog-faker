import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import commentsReducer from "./commentsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
  users: usersReducer,
});

export default rootReducer;
