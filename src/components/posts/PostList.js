import React from "react";
import PostCard from "./PostCard";
import jsonPlaceHolder from "../../apis/jsonPlaceHolder";

class PostList extends React.Component {
  state = {
    posts: [],
  };
  getPosts = async () => {
    const response = await jsonPlaceHolder.get("/posts");
    this.setState({ posts: response.data });
  };
  componentDidMount() {
    this.getPosts();
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return <PostCard key={post.id} post={post} />;
    });

    return <div className="ui three stackable cards">{posts}</div>;
  }
}
export default PostList;
/*
        <div className="ui right very close rail">
          <div className="ui segment">right</div>
        </div>*/
