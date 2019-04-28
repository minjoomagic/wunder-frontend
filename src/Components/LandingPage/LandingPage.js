import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../../Styling/LandingPage/menu.css";
import "../../Styling/LandingPage/style.css";
// import logo from "../../Images/star.png";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="page-body">
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="cool">
            <div />
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a href="/main">Main Menu</a>
                  </li>
                  <li>
                    <a href="/chef">Speak with our Chef</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <header className="showcase">
          <div className="container showcase-inner">
            <h1>Welcome to Wunder</h1>
            <p className="lets">Let's Eat!</p>
            <a href="/main" className="btn">
              Enter
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default LandingPage;
