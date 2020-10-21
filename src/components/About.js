import React, { Component } from "react";
import Header from "./Header";
class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <h1>About</h1>
        <p>Ini adalah halaman About</p>
      </div>
    );
  }
}
export default About;
