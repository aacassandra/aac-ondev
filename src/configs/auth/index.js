import Data from "../../data";

class Auth {
  isAuthenticated() {
    const client = Data.Client();
    if (client !== null && client.sessionToken !== null) {
      return true;
    } else {
      return false;
    }
  }
}

export default new Auth();
