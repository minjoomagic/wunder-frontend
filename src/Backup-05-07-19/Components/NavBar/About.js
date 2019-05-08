import React from "react";
import "../../Styling/NavBar/About.css";

class About extends React.Component {
  state = {
    clicked: false
  };

  clickContactHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="about-body">
        <header className="show">
          <div className="container2 show-inner">
            <h1>Wondering about Wunder?</h1>
            <p className="description">
              Wunder is an innovative platform that connects customers & brands
              with personal experts and information at their fingertips.
            </p>
            <button
              className="landingPage-btn"
              onClick={this.clickContactHandler}
            >
              Contact INFO
            </button>
            {this.state.clicked ? (
              <h3>
                <br />
                Wunderfully created by: Robert Han
              </h3>
            ) : null}
          </div>
        </header>
      </div>
    );
  }
}

export default About;
