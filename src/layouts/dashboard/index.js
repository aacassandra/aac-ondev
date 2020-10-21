import React from "react";
import { Header, Sidebar, Footer } from "../../components/molecules/dashboard";
// import Screens from '../../screen';

// const Router = props => {
//   return (
//     <div>
//       <Screens.Dashboard
//         style={props.match.path !== '/dashboard' ? page.disabled : ''}
//         match={props.match}
//       />
//     </div>
//   );
// };

const Admin = (props) => {
  return (
    <div>
      <Header.Mobile />
      <div className="container-fluid bg-soft">
        <div className="row">
          <div className="col-12">
            <Sidebar />
            <main class="content">
              <Header.Desktop />
              <Footer />
            </main>
          </div>
        </div>
      </div>
      {/* <Sidebar />
      <Router match={props.match} />
      <Footer /> */}
    </div>
  );
};

// const page = {
//   disabled: {
//     display: 'none'
//   }
// };

export default Admin;
