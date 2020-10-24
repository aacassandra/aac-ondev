import React from "react";
import { Route, useHistory } from "react-router-dom";
import {
  Header,
  Sidebar,
  Footer,
  Preloader,
} from "../../components/molecules/dashboard";
import Dashboard from "../../pages/dashboard";
import { checkIsAuthenticated } from "../../services/auth";

function sessionCheck(history) {
  checkIsAuthenticated().catch(() => {
    history.push("/");
  });
}

export default function Admin({ match }) {
  const history = useHistory();

  if (process.env.REACT_APP_SESSION_CHECK === "true") {
    sessionCheck(history);
  }

  const path = match.path;
  return (
    <div>
      <Header.Mobile />
      <div className="container-fluid bg-soft">
        <div className="row">
          <div className="col-12">
            <Sidebar match={match} />
            <main className="content">
              <Header.Desktop />
              <Preloader />
              <Route
                path={path + "/overview"}
                component={Dashboard.Main.Overview}
              />
              <Route
                path={path + "/traffic-&-engagement"}
                component={Dashboard.Main.Traffic}
              />
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
