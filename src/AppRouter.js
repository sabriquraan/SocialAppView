import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import AlbumsPage from "./pages/AlbumsPage";
import PostViewPage from "./pages/PostViewPage";
import AlbumViewPage from "./pages/AlbumViewPage";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/posts" exact component={PostsPage} />
            <Route path="/posts/:id" exact component={PostViewPage} />
            <Route path="/albums" exact component={AlbumsPage} />
            <Route path="/albums/:id" exact component={AlbumViewPage} />
            <Route path="/:id" exac component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
