import React from "react";
import MainMenuCard from "./MainMenuCard";
import "../../Styling/Main/MainMenu.css";
import image1 from "../../Images/ingredients2.png";
import image2 from "../../Images/recipes2.png";
import image3 from "../../Images/chef2.png";

class MainMenu extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-md-3">
          <MainMenuCard
            image={image1}
            title="Browse Our Items"
            description="Browse our 10,000+ items, Search, & even find the Location of an item!"
            link="/items"
          />
        </div>
        <div className="col-md-3">
          <MainMenuCard
            image={image2}
            title="Browse Our Recipes"
            description="Try something new today with our World Class Recipes at your fingertips! "
            link="/recipes"
          />
        </div>
        <div className="col-md-3">
          <MainMenuCard
            image={image3}
            title="Chef Connect"
            description="Chat Live with one of our award-winning chefs who can help you make a great meal today!"
            link="/chefconnect"
          />
        </div>
      </div>
    );
  }
}

export default MainMenu;
