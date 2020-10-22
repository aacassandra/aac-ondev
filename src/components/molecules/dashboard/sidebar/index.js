/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../../sidebar";

function LinkArrow() {
  return (
    <span className="link-arrow">
      <span className="fas fa-chevron-right"></span>
    </span>
  );
}

function Title(props) {
  return (
    <span>
      <span className="sidebar-icon">
        <span className={props.icon}></span>
      </span>
      {props.name}
    </span>
  );
}

export default function index(props) {
  const path = props.match.path;
  let urlElements = window.location.href;
  let n = urlElements.indexOf("/dashboard");
  urlElements = urlElements.substring(n, 100);
  return (
    <nav
      id="sidebarMenu"
      className="sidebar d-md-block bg-primary text-white collapse"
      data-simplebar
    >
      <div className="sidebar-inner px-4 pt-3">
        <div className="user-card d-flex align-items-center justify-content-between justify-content-md-center pb-4">
          <div className="d-flex align-items-center">
            <img
              src={Sidebar.Logo}
              className="card-img-top"
              alt="Bonnie Green"
              style={{ width: "150px" }}
            />
          </div>
          <div className="collapse-close d-md-none">
            <a
              href="#sidebarMenu"
              className="fas fa-times"
              data-toggle="collapse"
              data-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="true"
              aria-label="Toggle navigation"
            ></a>
          </div>
        </div>
        <ul className="nav flex-column">
          {Sidebar.List.map((e, i) => {
            // multi-level
            if (e.child && e.child.length >= 1) {
              if (!e.hide) {
                return (
                  <li className="nav-item" key={i}>
                    <span
                      className="nav-link d-flex justify-content-between align-items-center"
                      data-toggle="collapse"
                      data-target={"#" + e.name + "-" + i}
                    >
                      <Title name={e.name} icon={e.icon} />
                      <LinkArrow />
                    </span>
                    <div
                      className={`multi-level collapse ${
                        e.path === path ? "show" : ""
                      }`}
                      role="list"
                      id={e.name + "-" + i}
                      aria-expanded="false"
                    >
                      <ul className="flex-column nav">
                        {e.child.map((c, u) => {
                          return (
                            <li
                              className={`nav-item ${
                                urlElements === e.path + c.to ? "active" : ""
                              }`}
                              key={u}
                            >
                              <Link to={e.path + c.to} className="nav-link">
                                <span>{c.name}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }
            }
            // single-level
            else {
              if (!e.hide) {
                return (
                  <li
                    className={`nav-item ${e.path === path ? "active" : ""}`}
                    key={i}
                  >
                    <Link to={e.path} className="nav-link">
                      <span className="sidebar-icon">
                        <span className={e.icon}></span>
                      </span>
                      <span>{e.name}</span>
                    </Link>
                  </li>
                );
              }
            }
          })}
        </ul>
      </div>
    </nav>
  );
}
