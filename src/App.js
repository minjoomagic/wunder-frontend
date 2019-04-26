import React from "react";
import { Route, Switch, withRouter } from "react-router";
import LandingPage from "./Components/LandingPage/LandingPage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            render={routerProps => (
              <LandingPage title="Wunder" logo="truck" color="primary" />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
