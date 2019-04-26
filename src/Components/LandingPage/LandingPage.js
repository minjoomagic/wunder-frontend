import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../../Styling/LandingPage.css";
import logo from "../../Images/star.png";

class LandingPage extends React.Component {
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
        <Navbar className="bg-custom" variant="dark">
          <img src={logo} className="logo" />
          <Navbar.Brand href="#home">
            {" "}
            <h3 className="brand-name">Wunder</h3>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Button className="explore" href="/items">
              Explore
            </Button>
            <Button className="about" href="/about">
              About
            </Button>
          </Nav>
        </Navbar>
        <div className="backgr-landing">
          <div className="overlay" />
          <div className="whatever">
            <h1>Wunder</h1>
            <p>
              The only platform that let's you speak to a live expert in-store.
              Let's Eat.
            </p>
            <p>
              <Button className="mr-2" variant="primary" href="/signup">
                Sign Up
              </Button>
              <Button className="mr-2" variant="primary" href="/login">
                LogIn
              </Button>
              <br />
              <br />
              <Button className="mr-2" variant="success" href="/items">
                Explore
              </Button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
