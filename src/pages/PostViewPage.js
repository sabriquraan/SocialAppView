import React, { Component } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CommentList from "../components/comments/CommentList";
import PostCard from "../components/posts/PostCard";
import jsonPlaceHolder from "..//apis/jsonPlaceHolder";

class PostViewPage extends Component {
  state = { post: {} };

  getPost = async (postId) => {
    const response = await jsonPlaceHolder.get(`/posts/${postId}`);
    this.setState({ post: response.data });
  };

  componentDidMount() {
    this.getPost(this.props.match.params.id);
  }
  render() {
    const postId = this.props.match.params.id;
    return (
      <div>
        <div className="container articles-container">
          <Header />
          <PostCard post={this.state.post} />
          <CommentList postId={postId} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default PostViewPage;
