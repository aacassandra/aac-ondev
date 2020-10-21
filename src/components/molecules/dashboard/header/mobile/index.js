import React from "react";

export default function index() {
  return (
    <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
      <a className="navbar-brand mr-lg-5" href="iasd.html">
        <img
          className="navbar-brand-dark"
          src="../../../../assets/img/brand/light.svg"
          alt="Volt logo"
        />
        <img
          className="navbar-brand-light"
          src="../../../../assets/img/brand/dark.svg"
          alt="Volt logo"
        />
      </a>
      <div className="d-flex align-items-center">
        <button
          className="navbar-toggler d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
