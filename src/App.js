import React from "react";
import { Route, Switch, withRouter } from "react-router";
import LandingPage from "./Components/LandingPage/LandingPage";
import Signup from "./Components//LogIn-SignUp/SignUp";
import Login from "./Components//LogIn-SignUp/LogIn";
import NavBar from "./Components//NavBar/NavBar";
// import Main from "./Components//Main/Main";

import "./App.css";

class App extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    console.log("App did Mount!, token is: ", token);
    fetch("http://localhost:3000/get_user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        authorization: `${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log("data returned from API:", data);
        this.setState({ user: data.user });
      });
    console.log("end of component did mount");
  }

  // ================== HANDLE LOGIN ================
  onLoginHandler = user => {
    console.log("onLoginHandlerFIRING!!!");
    let token = localStorage.getItem("token");
    fetch("http://localhost:3000/login_user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        authorization: `${token}`
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.jwt);
        this.setState({ user: data.user }, () => {
          if (this.state.user) {
            this.props.history.push("/items");
          }
        });
      });
    console.log("token is:", localStorage.token);
  };

  // ================== HANDLE CREATE USER ================
  onCreateUserHandler = user => {
    let config = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
          address: user.address,
          phone_number: user.phoneNumber
        }
      })
    };
    fetch("http://localhost:3000/users", config)
      .then(resp => resp.json())
      .then(data => {
        console.log("create user fired:", data);
        this.setState({ user: data.user });
        localStorage.setItem("token", data.token);
        // this.props.history.push("/items");
      });
  };

  // ================ HANDLE LOGOUT ================
  logoutHandler = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
    this.setState({ user: null });
  };

  render() {
    console.log("logoutHandler", this.logoutHandler);
    return (
      <div className="App">
        <Switch>
          <Route
            path="/main"
            render={routerProps => (
              <div>
                <NavBar
                  onLoginHandler={this.onLoginHandler}
                  title="Wunder"
                  color="primary"
                />
              </div>
            )}
          />
          <Route
            path="/login"
            render={routerProps => (
              <div>
                <NavBar />
                <Login
                  NavBar={NavBar}
                  onLoginHandler={this.onLoginHandler}
                  title="Wunder"
                  color="primary"
                />
              </div>
            )}
          />
          <Route
            path="/signup"
            render={routerProps => (
              <div>
                <NavBar />
                <Signup
                  onCreateUserHandler={this.onCreateUserHandler}
                  title="Wunder"
                  color="primary"
                />
              </div>
            )}
          />
          /* ------ Any other route put above this line ------ */
          <Route
            path="/"
            render={routerProps => <LandingPage title="Wunder" />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
