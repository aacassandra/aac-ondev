import React from "react";
import { Helmet } from "react-helmet-async";

export default function title(props) {
  return (
    <Helmet>
      <title>
        {process.env.REACT_APP_WEBSITE_NAME} | {props.name}
      </title>
    </Helmet>
  );
}
