import React from "react";
import "../../Styling/NavBar/About.css";
import { TweenMax, TweenLite, TimelineMax, TimelineLite, Bounce } from "gsap";

class About extends React.Component {
  state = {
    clicked: false
  };

  clickContactHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    TweenMax.from(".description", 5, {
      left: 800,
      borderColor: "white",
      borderRadius: 26,
      x: 800,
      opacity: 0
    });
    TweenMax.from(".about-title", 5, {
      up: 100,
      y: 100,
      opacity: 0
    });

    TweenMax.from(".about-name", 5, {
      down: 900,
      y: 100,
      opacity: 0,
      delay: 4
    });

    return (
      <div className="about-body">
        <header className="show">
          <div className="container2 show-inner">
            <h1 className="about-title">Wondering about Wunder?</h1>
            <p className="description">
              Wunder is an innovative platform that connects customers & brands
              with personal experts and information at their fingertips.
            </p>

            <h3 className="about-name">
              <br />
              Wunderfully created by: Robert Han
            </h3>
          </div>
        </header>
      </div>
    );
  }
}

export default About;
