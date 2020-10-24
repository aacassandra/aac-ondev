import { ParseValidateSession } from "@aacassandra/parse-lib";
import Data from "../../data";

export default function index() {
  return new Promise((res, rej) => {
    const client = Data.Client();
    ParseValidateSession(client.sessionToken)
      .then(() => {
        res();
      })
      .catch(() => {
        // Fixing for preloaders, setTimeout preloader set stop if user can be force logout
        localStorage.forceSignout = true;

        if (client.rememberMe === true) {
          client.sessionToken = null;
          localStorage.client = JSON.stringify(client);
        } else {
          localStorage.removeItem("client");
        }
        rej();
      });
  });
}
