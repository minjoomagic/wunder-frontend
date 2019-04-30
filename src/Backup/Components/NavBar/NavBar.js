import React from "react";
import "../../Styling/NavBar/NavBar.css";
import logo from "../../Images/star.png";
import { Link } from "react-router-dom";
import { capitalize } from "../../Utilities/Utilities";

class NavBar extends React.Component {
  logOutHandler = () => {
    this.props.logOutHandler();
  };

  render() {
    return (
      <div>
        <ul className="wunder" role="navigation">
          <li>
            <a href="/about" className="about-page">
              About
            </a>
          </li>
          <li>
            <a href="/map" className="map-page">
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
              <ul className="logout-btn" onClick={this.logOutHandler}>
                LogOut
              </ul>
            ) : (
              <a href="/login" className="login-page">
                LogIn
              </a>
            )}
          </li>
          <li>{this.props.user ? <i className="fas fa-user" /> : null}</li>
          <li>
            <button>Menu</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
