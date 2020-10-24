import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Signin } from "../../pages";
import { Dashboard } from "../../layouts";
import Guard from "../guard";
import { HelmetProvider } from "react-helmet-async";

class Routes extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <Router>
          <Switch>
            <Guard path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Signin} />
          </Switch>
        </Router>
      </HelmetProvider>
    );
  }
}

export default Routes;
