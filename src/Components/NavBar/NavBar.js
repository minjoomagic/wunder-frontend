import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../../Styling/NavBar/NavBar.css";
import logo from "../../Images/star.png";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    // let landingStyle = {
    //   width: "auto",
    //   height: "auto",
    //   margin: "auto"
    // };
    // <div className="background-pic" />;
    // style={landingStyle}

    // <Navbar bg={this.props.color}  variant="dark">

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
              <img src={logo} className="logo" />
              Wunder
            </Link>
          </li>
          <li>
            <a href="/login" className="login-page">
              LogIn
            </a>
          </li>
          <li>
            <i className="fas fa-user" />
          </li>
          <li>
            <button>Menu</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
