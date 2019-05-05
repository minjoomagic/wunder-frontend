import React from "react";

// import ItemContainer from "./ItemContainer";
import { Route, Switch } from "react-router";
import { withRouter } from "react-router-dom";
import MainMenu from "./MainMenu";

class Main extends React.Component {
  state = {
    items: [],
    user: null
  };

  // <Switch>
  //   <Route
  //     path="/items"
  //     render={routerProps => <ItemContainer items={items} />}
  //   />
  // </Switch>

  render() {
    return (
      <div>
        <MainMenu user={this.props.user} API_ITEM={this.props.API_ITEM} />
      </div>
    );
  }
}

export default withRouter(Main);

// import React from "react";
//
// // import ItemContainer from "./ItemContainer";
// import { Route, Switch } from "react-router";
// import { withRouter } from "react-router-dom";
// import MainMenu from "./MainMenu";
//
// class Main extends React.Component {
//   state = {
//     items: [],
//     user: null
//   };
//
//   // <Switch>
//   //   <Route
//   //     path="/items"
//   //     render={routerProps => <ItemContainer items={items} />}
//   //   />
//   // </Switch>
//
//   render() {
//     return (
//       <div>
//         <MainMenu user={this.props.user} API_ITEM={this.props.API_ITEM} />
//       </div>
//     );
//   }
// }
//
// export default withRouter(Main);
