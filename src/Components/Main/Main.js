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
        <MainMenu />
      </div>
    );
  }
}

export default withRouter(Main);
