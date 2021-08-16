import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";

import Header from "components/header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={UsersPage} />
        <Route exact path="/blogger/:bloggerId/posts" component={PostsPage} />
        <Route
          exact
          path="/blogger/:bloggerId/posts/:postId"
          component={PostPage}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
