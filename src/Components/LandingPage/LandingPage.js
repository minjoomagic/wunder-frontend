import React from "react";
import "../../Styling/LandingPage/menu.css";
import "../../Styling/LandingPage/style.css";
// import logo from "../../Images/star.png";
import { TweenMax, TweenLite, TimelineMax, TimelineLite, Bounce } from "gsap";

class LandingPage extends React.Component {
  render() {
    TweenMax.from(".landing-title", 1, {
      down: 10,
      padding: 20,
      y: -10,
      opacity: 0,
      delay: 0.5
    });
    TweenMax.to(".landing-title", 1, {
      down: 10,
      padding: 20,
      y: -10,
      opacity: 0,
      delay: 2
    });
    TweenMax.from(".landing-title2", 1, {
      up: 10,
      y: 10,
      opacity: 0,
      delay: 3
    });
    TweenMax.to(".landing-title2", 1, {
      down: 10,
      y: -10,
      opacity: 0,
      delay: 4
    });
    TweenMax.from(".landing-title3", 2, {
      down: 10,
      y: -10,
      opacity: 0,
      delay: 5
    });
    TweenMax.to(".landing-title3, .lets, .landingPage-btn", 5, {
      down: 150,
      y: -150,
      opacity: 1,
      delay: 7,
      ease: Bounce.easeOut
    });
    TweenMax.to(".welcome", 5, {
      up: 50,
      y: 50,
      opacity: 1,
      delay: 7,
      ease: Bounce.easeOut
    });
    TweenMax.to(".landing-title3, .lets, .landingPage-btn, .welcome", 3, {
      right: 50,
      x: -50,
      opacity: 1,
      delay: 12.5
    });

    return (
      <div className="page-body">
        <header className="showcase">
          <div className="container showcase-inner">
            <div>
              <h1 className="welcome">Welcome to </h1>
              <h1 className="landing-title">Wunderful</h1>
              <h1 className="landing-title2">Wundering</h1>
              <h1 className="landing-title3">Wunder</h1>
            </div>

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
