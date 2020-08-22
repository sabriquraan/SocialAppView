import React, { Component } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

class HomePage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container articles-container">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
