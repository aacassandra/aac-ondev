/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <nav
        id="sidebarMenu"
        className="sidebar d-md-block bg-primary text-white collapse"
        data-simplebar
      >
        <div className="sidebar-inner px-4 pt-3">
          <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
            <div className="d-flex align-items-center">
              <div className="user-avatar lg-avatar mr-4">
                <img
                  src="../../../../assets/img/team/profile-picture-3.jpg"
                  className="card-img-top rounded-circle border-white"
                  alt="Bonnie Green"
                />
              </div>
              <div className="d-block">
                <h2 className="h6">Hi, Jane</h2>
                <a
                  href="../examples/sign-in.html"
                  className="btn btn-secondary text-dark btn-xs"
                >
                  <span className="mr-2">
                    <span className="fas fa-sign-out-alt"></span>
                  </span>
                  Sign Out
                </a>
              </div>
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
            <li className="nav-item">
              <span
                className="nav-link collapsed d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#submenu-dashboard"
              >
                <span>
                  <span className="sidebar-icon">
                    <span className="fas fa-chart-pie"></span>
                  </span>
                  Dashboard{" "}
                </span>
                <span className="link-arrow">
                  <span className="fas fa-chevron-right"></span>
                </span>
              </span>
              <div
                className="multi-level collapse"
                role="list"
                id="submenu-dashboard"
                aria-expanded="false"
              >
                <ul className="flex-column nav">
                  <li className="nav-item">
                    <a href="../dashboard/dashboard.html" className="nav-link">
                      <span>Overview</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../dashboard/traffic-sources.html"
                      className="nav-link"
                    >
                      <span>Traffic & Engagement</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../dashboard/app-analysis.html"
                      className="nav-link"
                    >
                      <span>Product Analysis</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="../messages.html"
                className="nav-link d-flex align-items-center justify-content-between"
              >
                <span>
                  <span className="sidebar-icon">
                    <span className="fas fa-inbox"></span>
                  </span>
                  Messages{" "}
                </span>
                <span className="badge badge-md bg-danger badge-pill">4</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../users.html" className="nav-link">
                <span className="sidebar-icon">
                  <span className="fas fa-user-check"></span>
                </span>
                <span>Users List</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../transactions.html" className="nav-link">
                <span className="sidebar-icon">
                  <span className="fas fa-hand-holding-usd"></span>
                </span>
                <span>Transactions</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../tasks.html" className="nav-link">
                <span className="sidebar-icon">
                  <span className="fas fa-clipboard-list"></span>
                </span>
                <span>Task List</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../settings.html" className="nav-link">
                <span className="sidebar-icon">
                  <span className="fas fa-cog"></span>
                </span>
                <span>Settings</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../calendar.html" className="nav-link">
                <span className="sidebar-icon">
                  <span className="far fa-calendar-alt"></span>
                </span>
                <span>Calendar</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../map.html" className="nav-link">
                <span className="sidebar-icon">
                  <span className="fas fa-map-marked-alt"></span>
                </span>
                <span>Map</span>
              </a>
            </li>
            <li className="nav-item">
              <span
                className="nav-link collapsed d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#submenu-app"
              >
                <span>
                  <span className="sidebar-icon">
                    <span className="fas fa-table"></span>
                  </span>
                  Tables{" "}
                </span>
                <span className="link-arrow">
                  <span className="fas fa-chevron-right"></span>
                </span>
              </span>
              <div
                className="multi-level collapse"
                role="list"
                id="submenu-app"
                aria-expanded="false"
              >
                <ul className="flex-column nav">
                  <li className="nav-item">
                    <a className="nav-link" href="../tables/datatables.html">
                      <span>DataTables</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../tables/bootstrap-tables.html"
                    >
                      <span>Bootstrap Tables</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <span
                className="nav-link collapsed d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#submenu-pages"
              >
                <span>
                  <span className="sidebar-icon">
                    <span className="far fa-file-alt"></span>
                  </span>
                  Page examples{" "}
                </span>
                <span className="link-arrow">
                  <span className="fas fa-chevron-right"></span>
                </span>
              </span>
              <div
                className="multi-level collapse"
                role="list"
                id="submenu-pages"
                aria-expanded="false"
              >
                <ul className="flex-column nav">
                  <li className="nav-item">
                    <a className="nav-link" href="../examples/pricing.html">
                      <span>Pricing</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../examples/billing.html">
                      <span>Billing</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../examples/invoice.html">
                      <span>Invoice</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../examples/sign-in.html">
                      <span>Sign In</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../examples/sign-up.html">
                      <span>Sign Up</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../examples/forgot-password.html"
                    >
                      <span>Forgot password</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../examples/reset-password.html"
                    >
                      <span>Reset password</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../examples/lock.html">
                      <span>Lock</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../examples/404.html">
                      <span>404 Not Found</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../examples/500.html">
                      <span>500 Server Error</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <span
                className="nav-link d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#submenu-components"
              >
                <span>
                  <span className="sidebar-icon">
                    <span className="fas fa-box-open"></span>
                  </span>
                  Components{" "}
                </span>
                <span className="link-arrow">
                  <span className="fas fa-chevron-right"></span>
                </span>
              </span>
              <div
                className="multi-level collapse show"
                role="list"
                id="submenu-components"
                aria-expanded="false"
              >
                <ul className="flex-column nav">
                  <li className="nav-item">
                    <a className="nav-link" href="buttons.html">
                      <span>Buttons</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="notifications.html">
                      <span>Notifications</span>
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="forms.html">
                      <span>Forms</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="modals.html">
                      <span>Modals</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="typography.html">
                      <span>Typography</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a href="../widgets.html" className="nav-link">
                <span className="sidebar-icon">
                  <span className="fas fa-th-large"></span>
                </span>
                <span>Widgets</span>
              </a>
            </li>
            <li
              role="separator"
              className="dropdown-divider mt-4 mb-3 border-black"
            ></li>
            <li className="nav-item">
              <a
                href="../../index-2.html"
                className="nav-link d-flex align-items-center"
              >
                <span className="sidebar-icon">
                  <img
                    src="../../../../assets/img/brand/light.svg"
                    height="20"
                    width="20"
                    alt="Volt Logo"
                  />{" "}
                </span>
                <span className="mt-1">Volt Overview</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/getting-started/quick-start/"
                target="_blank"
                className="nav-link d-flex align-items-center"
              >
                <span className="sidebar-icon">
                  <span className="fas fa-book"></span>
                </span>
                <span>
                  Documentation
                  <span className="badge badge-md bg-secondary ml-1 text-dark">
                    v1.0
                  </span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://themesberg.com/product/admin-dashboard/volt-premium-bootstrap-5-dashboard"
                target="_blank"
                className="nav-link d-flex align-items-center"
              >
                <span className="sidebar-icon">
                  <span className="fas fa-shopping-cart"></span>
                </span>
                <span>Buy now</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://themesberg.com/"
                target="_blank"
                className="nav-link d-flex align-items-center"
              >
                <span className="sidebar-icon">
                  <img
                    src="../../../../assets/img/themesberg.svg"
                    height="20"
                    width="20"
                    alt="Themesberg Logo"
                  />{" "}
                </span>
                <span>Themesberg</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
