import React, { Component } from "react";
import Header from "./Header";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <h1>Home</h1>
        <p>Ini adalah halaman home</p>
      </div>
    );
  }
}
export default Home;
