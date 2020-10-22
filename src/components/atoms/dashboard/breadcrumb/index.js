/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function index(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb breadcrumb-dark breadcrumb-transparent">
        <li className="breadcrumb-item">
          <Link to="/dashboard">
            <span className="fas fa-home"></span>
          </Link>
        </li>
        {props.breadcrumb.map((e, i) => {
          if (i + 1 === props.breadcrumb.length) {
            return (
              <li
                className="breadcrumb-item active"
                aria-current="page"
                key={i}
              >
                {e.name}
              </li>
            );
          } else {
            return (
              <li className="breadcrumb-item" aria-current="page" key={i}>
                <Link to={e.to}>{e.name}</Link>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
}
