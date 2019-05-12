import React from "react";
import { Route, Switch, withRouter } from "react-router";
import LandingPage from "./Components/LandingPage/LandingPage";
import Signup from "./Components//LogIn-SignUp/SignUp";
import Login from "./Components//LogIn-SignUp/LogIn";
import NavBar from "./Components//NavBar/NavBar";
import ItemContainer from "./Components/ItemContainer/ItemContainer";
import MainMenu from "./Components/Main/MainMenu";
import StoreMap from "./Components/NavBar/StoreMap";
import About from "./Components/NavBar/About";
import Favorites from "./Components/NavBar/Favorites";

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
            this.props.history.push("/main");
          }
        });
      });
    console.log("token is:", localStorage.token);
  };

  // ================== HANDLE CREATE USER ================
  onCreateUserHandler = user => {
    console.log("i am in create user", user);
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
          email: user.email,
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
        this.props.history.push("/main");
      });
  };

  // ================ HANDLE LOGOUT ================
  logOutHandler = () => {
    // localStorage.clear()
    localStorage.removeItem("token");
    this.props.history.push("/");
    this.setState({ user: null });
  };

  render() {
    console.log("logOutHandler", this.logOutHandler);

    return (
      <div className="App">
        <NavBar
          onLoginHandler={this.onLoginHandler}
          title="Wunder"
          color="primary"
          logOutHandler={this.logOutHandler}
          user={this.state.user}
        />

        <Switch>
          <Route
            path="/favorites"
            render={routerProps => (
              <div>
                <Favorites
                  logOutHandler={this.logoutHandler}
                  user={this.state.user}
                />
              </div>
            )}
          />
          <Route
            path="/storemap"
            render={routerProps => (
              <div>
                <StoreMap
                  logOutHandler={this.logoutHandler}
                  user={this.state.user}
                />
              </div>
            )}
          />
          <Route
            path="/about"
            render={routerProps => (
              <div>
                <About
                  logOutHandler={this.logoutHandler}
                  user={this.state.user}
                />
              </div>
            )}
          />
          <Route
            path="/main"
            render={routerProps => (
              <div>
                <MainMenu
                  logOutHandler={this.logoutHandler}
                  user={this.state.user}
                />
              </div>
            )}
          />
          <Route
            path="/login"
            render={routerProps => (
              <div>
                <Login
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
                <Signup
                  onCreateUserHandler={this.onCreateUserHandler}
                  title="Wunder"
                  color="primary"
                />
              </div>
            )}
          />
          {/* ------ Any other route put above this line ------ */}
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
