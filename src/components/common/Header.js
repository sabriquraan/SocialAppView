import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="ui massive menu">
        <Link to="/" className="item">
          Home
        </Link>
        <div className="right menu">
          <Link to="/posts" className="item">
            Posts
          </Link>
          <Link to="/albums" className="item">
            Albums
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
