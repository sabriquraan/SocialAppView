import React from "react";
import { Link } from "react-router-dom";
import UserInfotmation from "../users/UserInformation";
class AlbumItem extends React.Component {
  /*
  getUserNameById = async (userId) => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);
    var userName =  response.data.name;
    return userName;
  };*/

  render() {
    const { userId, id, title } = this.props.album;
    //var userName = this.getUserNameById(userId);
    return (
      // <Link to={`/albums/${id}`}>

      <div className="ui doubling stackable centered card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="description"></div>
        </div>
        <div className="extra content">
          <div className="left floated author">
            <UserInfotmation userId={userId} />
          </div>
        </div>
        <div className="content">
          <div className="ui fluid button">
            <Link to={`/albums/${id}`}>
              <button className="ui right labeled icon button">
                <i className="right arrow icon"></i>
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumItem;
