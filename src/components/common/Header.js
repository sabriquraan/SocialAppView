import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="ui large top fixed hidden menu">
        <div className="ui container">
          <Link to="/" className="active item">
            Home
          </Link>
          <div className="right menu">
            <Link to="/posts" className="active item">
              Posts
            </Link>
            <Link to="/albums" className="active item">
              Albums
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;

/*
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
</div>*/
