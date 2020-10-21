import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
