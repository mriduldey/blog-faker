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
        <Route exact path="/bloggers/:id/posts" component={PostsPage} />
        <Route exact path="/posts/:id" component={PostPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
