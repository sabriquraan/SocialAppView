import React, { Component } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import AlbumList from "../components/albums/AlbumList";

class AlbumsPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="container articles-container">
          <Header />
          <AlbumList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default AlbumsPage;
