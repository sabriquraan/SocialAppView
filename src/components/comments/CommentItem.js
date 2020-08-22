import React from "react";

class CommentItem extends React.Component {
  render() {
    const { email, body } = this.props.comment;
    return (
      <div className="ui segment">
        <div className="comment">
          <div className="content">
            <h2 className="ui left  fluid top attached block  header">
              {email}
            </h2>
            <div className="ui clearing divider"></div>
            <div className="metadata">
              <span className="date">{this.props.timeAgo}</span>
            </div>
            <div className="text">{body}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentItem;
