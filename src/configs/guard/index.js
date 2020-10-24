import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../auth";

const Guard = ({ component: Component, ...rest }) => {
  const isAuthenticated = Auth.isAuthenticated();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

export default Guard;
