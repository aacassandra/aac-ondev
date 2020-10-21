/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <footer className="footer section py-5">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
              Copyright © 2019-<span className="current-year"></span>
              <a
                className="text-primary font-weight-normal"
                href="https://themesberg.com/"
                target="_blank"
              >
                Themesberg
              </a>
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <a href="https://themesberg.com/about">About</a>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <a href="https://themesberg.com/themes">Themes</a>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <a href="https://themesberg.com/blog">Blog</a>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <a href="https://themesberg.com/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
