import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="ui large bottom fixed hidden menu">
        <div className="ui container">
          <Link to="/" className="active item">
            Sabri social network
          </Link>
        </div>
      </div>
    );
  }
}
export default Footer;
