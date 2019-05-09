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
      // backgroundColor: "#ffffff",
      // padding: 20,
      borderColor: "white",
      borderRadius: 26,
      x: 800,
      opacity: 0
      // delay: 9,
      // ease: Bounce.easeOut
    });
    TweenMax.from(".about-title", 5, {
      up: 100,
      // backgroundColor: "#ffffff",
      // padding: 20,
      // borderColor: "white",
      // borderRadius: 26,
      y: 100,
      opacity: 0
      // delay: 9,
      // ease: Bounce.easeOut
    });

    TweenMax.from(".about-name", 5, {
      down: 900,
      // backgroundColor: "#ffffff",
      // padding: 20,
      // borderColor: "white",
      // borderRadius: 26,
      y: 100,
      opacity: 0,
      delay: 4
      // ease: Bounce.easeOut
    });

    // TweenMax.to(".description", 4, {
    //   right: 900,
    //   // backgroundColor: "#f00",
    //   padding: 20,
    //   borderColor: "white",
    //   borderRadius: 26,
    //   x: -900,
    //   opacity: 1,
    //   delay: 3
    //   // ease: Bounce.easeOut
    // });
    // TweenMax.to(".description", 4, {
    //   left: 0,
    //   // backgroundColor: "#f00",
    //   padding: 20,
    //   borderColor: "white",
    //   borderRadius: 26,
    //   x: 0,
    //   opacity: 1,
    //   delay: 7
    //   // ease: Bounce.easeOut
    // });

    // <button
    //   className="landingPage-btn"
    //   onClick={this.clickContactHandler}
    // >
    //   Contact INFO
    // </button>
    // {this.state.clicked ? (
    //   <h3>
    //     <br />
    //     Wunderfully created by: Robert Han
    //   </h3>
    // ) : null}

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
