import { ParseValidateSession } from "@aacassandra/parse-lib";
import Data from "../../data";

function helper() {
  return new Promise((res) => {
    const client = Data.Client();
    ParseValidateSession(client.sessionToken)
      .then((response) => {
        if (client.rememberMe === true) {
          client.sessionToken = null;
          localStorage.client = JSON.stringify(client);
        } else {
          localStorage.clear();
        }
        res(true);
      })
      .catch((e) => {
        res(false);
      });
  });
}

class Auth {
  async isAuthenticated() {
    const client = Data.Client();
    if (client.sessionToken !== null) {
      return await helper();
    }
    return false;
  }
}

export default new Auth();
