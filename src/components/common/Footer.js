import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="ui massive menu">
        <Link to="/" className="item">
          Sabri social network
        </Link>
      </div>
    );
  }
}
export default Footer;
