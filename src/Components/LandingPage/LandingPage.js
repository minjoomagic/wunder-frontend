import React from "react";
import "../../Styling/LandingPage/menu.css";
import "../../Styling/LandingPage/style.css";
// import logo from "../../Images/star.png";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="page-body">
        <header className="showcase">
          <div className="container showcase-inner">
            <h1>Welcome to Wunder</h1>
            <p className="lets">Let's Eat!</p>
            <a href="/main" className="landingPage-btn">
              Enter
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default LandingPage;
