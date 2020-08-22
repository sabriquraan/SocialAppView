import React from "react";
import faker from "faker";
import Comment from "./CommentItem";
import jsonPlaceHolder from "../../apis/jsonPlaceHolder";

class CommentList extends React.Component {
  state = { comments: [] };

  getComments = async () => {
    const postId = this.props.postId;
    const response = await jsonPlaceHolder.get(`posts/${postId}/comments`);
    this.setState({ comments: response.data });
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    const comments = this.state.comments.map((comment) => {
      return (
        <Comment
          avatar={faker.image.avatar()}
          key={comment.id}
          comment={comment}
        />
      );
    });
    return <div className="ui fluid card">{comments}</div>;
  }
}

export default CommentList;
