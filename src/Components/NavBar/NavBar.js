import React from "react";
import "../../Styling/NavBar/NavBar.css";
import "../../Styling/LandingPage/menu.css";
import "../../Styling/LandingPage/style.css";
import logo from "../../Images/star.png";
import { Link } from "react-router-dom";
import { capitalize } from "../../Utilities/Utilities";
import { Button } from "react-bootstrap";

class NavBar extends React.Component {
  logOutHandler = () => {
    this.props.logOutHandler();
  };

  render() {
    return (
      <div>
        <ul className="wunder" role="navigation">
          <li>
            <a href="/storemap" className="map-page">
              Store Map
            </a>
          </li>
          <li className="wunder-logo">
            <Link to="/main" className="wunder-title">
              <img src={logo} className="logo" alt="" />
              Wunder
            </Link>
          </li>
          <li>
            <ul className="login-page">
              Hi{" "}
              {this.props.user ? capitalize(this.props.user.username) : "guest"}
              !
            </ul>
          </li>
          <li>
            {this.props.user ? (
              <Button
                className="logout-btn"
                variant="danger"
                onClick={this.logOutHandler}
              >
                LogOut
              </Button>
            ) : (
              <a href="/login" className="login-page">
                LogIn
              </a>
            )}
          </li>
          <li>{this.props.user ? <i className="fas fa-user" /> : null}</li>
          <li>
            <li className="menu-wrap">
              <input type="checkbox" className="toggler" />
              <div className="cool">
                <div />
              </div>
              <div className="menu">
                <div>
                  <div>
                    <ul>
                      <li>
                        <a href="/favorites">My Favorites</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/login">Login</a>
                      </li>
                      <li>
                        <a href="/">Home Screen</a>
                      </li>
                      <li>
                        <a href="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <p>{"empty"}</p>
            </li>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
