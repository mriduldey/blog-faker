import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/users/:id/posts/" component={PostsPage} />
        <Route exact path="/posts/:id" component={PostPage} />
        <Redirect to="/users" />
      </Switch>
    </Router>
  );
};

export default App;
