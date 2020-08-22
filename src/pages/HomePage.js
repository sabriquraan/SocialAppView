import React, { Component } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

class HomePage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="container articles-container">
          <Header />
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
