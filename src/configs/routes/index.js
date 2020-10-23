import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Signin } from "../../pages";
import { Dashboard } from "../../layouts";
import Guard from "../guard";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Guard path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Signin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
