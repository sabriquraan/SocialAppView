import React, { Component } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import PhotoList from "../components/photos/PhotoList";
class AlbumViewPage extends Component {
  componentDidMount() {}

  render() {
    const albumId = this.props.match.params.id;

    return (
      <div>
        <div className="container articles-container">
          <Header />
          <PhotoList albumId={albumId} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default AlbumViewPage;
