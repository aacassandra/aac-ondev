import React from "react";

export default function index(props) {
  return (
    <div>
      <h1 className="h4">{props.header.title}</h1>
      <p className="mb-0">{props.header.subTitle}</p>
    </div>
  );
}
