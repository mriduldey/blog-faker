import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import commentsReducer from "./commentsReducer";
import usersReducer from "./usersReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
  users: usersReducer,
  user: userReducer,
});

export default rootReducer;
