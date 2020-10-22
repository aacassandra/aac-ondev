import React from "react";
import { Route } from "react-router-dom";
import {
  Header,
  Sidebar,
  Footer,
  Preloader,
} from "../../components/molecules/dashboard";
import Dashboard from "../../pages/dashboard";

const Admin = ({ match }) => {
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
              {/* <Preloader /> */}
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
};

export default Admin;
