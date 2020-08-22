import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
import UserInformation from "../users/UserInformation";
class PostCard extends React.Component {
  render() {
    return (
      <div id="divpost" className="ui fluid card">
        <div id="divpost" className="content">
          <div id="divpost" className="header">
            {this.props.post.title}
          </div>
          <div id="divpost" className="description">
            <p>{this.props.post.body}</p>
          </div>
        </div>
        <div id="divpost" className="extra content">
          <div id="divpost" className="left floated author">
            <UserInformation userId={this.props.post.userId} />
          </div>
        </div>
        <div id="divpost" className="ui button">
          <Link to={`/posts/${this.props.post.id}`}>
            <button className="ui right labeled icon button">
              <i className=" right arrow icon "></i>
              Comments
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default PostCard;
/*
     <Card>
        <Card.Content header={title} />

        <Card.Content>
          <Card.Description>{body}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <UserInfo userId={userId} />
        </Card.Content>
        <Card.Content extra>
          <Link to={`/posts/${id}`}>
            <Button className="ui right labeled icon button">
              <i className="right arrow icon"></i>
              Comments
            </Button>
          </Link>
        </Card.Content>
      </Card>*/
