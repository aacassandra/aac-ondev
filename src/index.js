import React from "react";
import ReactDOM from "react-dom";
import App from "./configs/routes";
import * as serviceWorker from "./serviceWorker";
import { ParseConfig } from "@aacassandra/parse-lib";
import "./assets/css/pace.css";

ParseConfig({
  mode: process.env.REACT_APP_MODE,
  protocol: process.env.REACT_APP_PROTOCOL,
  host: process.env.REACT_APP_HOST,
  port: process.env.REACT_APP_PORT,
  socket: process.env.REACT_APP_SOCKET,
  surl: process.env.REACT_APP_SURL,
  appId: process.env.REACT_APP_PARSE_ID,
  clientKey: process.env.REACT_APP_PARSE_CLIENT_KEY,
  resKey: process.env.REACT_APP_PARSE_REST_KEY,
  masterKey: process.env.REACT_APP_PARSE_MASTER_KEY,
  revocableSession: process.env.REACT_APP_PARSE_REVOCABLE_SESSION,
  headerAppId: process.env.REACT_APP_PARSE_HEADER_ID,
  headerClientKey: process.env.REACT_APP_PARSE_HEADER_CLIENT_KEY,
  headerResKey: process.env.REACT_APP_PARSE_HEADER_REST_KEY,
  headerMasterKey: process.env.REACT_APP_PARSE_HEADER_MASTER_KEY,
  headerRevocableSession: process.env.REACT_APP_PARSE_HEADER_REVOCABLE_SESSION,
  headerSessionToken: process.env.REACT_APP_PARSE_HEADER_SESSION_TOKEN,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
