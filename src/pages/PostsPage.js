import React, { Component } from "react";
import PostList from "../components/posts/PostList";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
class PostsPage extends Component {
  render() {
    return (
      <div className="container articles-container">
        <Header />
        <PostList />
        <Footer />
      </div>
    );
  }
}

export default PostsPage;
