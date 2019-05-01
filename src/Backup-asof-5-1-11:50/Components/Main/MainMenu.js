import React from "react";
import MainMenuCard from "./MainMenuCard";
import "../../Styling/Main/MainMenu.css";
import image1 from "../../Images/ingredients2.png";
import image2 from "../../Images/recipes2.png";
import image3 from "../../Images/chef2.png";
import { Route, Switch } from "react-router";
import { withRouter } from "react-router-dom";
import ItemContainer from "../ItemContainer/ItemContainer";
import ShowPage from "../ItemContainer/ShowPage/ShowPage";

const API_ITEM = "http://localhost:3000/items";
const API_RECIPE = "http://localhost:3000/recipes";

class MainMenu extends React.Component {
  state = {
    items: [],
    user: null
  };

  // ================= Fetch Data =====================
  componentDidMount() {
    console.log("Main did mount");
    this.setState({ user: this.props.user });
    this.fetchItems();
    // this.fetchRecipes();
    // this.fetchCategories();
  }

  // ----------------- Fetch Items ---------------------
  fetchItems = () => {
    console.log("items Fetch starting");
    fetch(API_ITEM)
      .then(res => res.json())
      .then(items => {
        this.setState(
          { items: items },
          console.log("these are my items", items)
        );
      });
  };
  render() {
    console.log("this is my user in MainMenu:", this.props.user);
    let items = this.state.items;
    return (
      <div>
        <Switch>
          <Route
            path="/main/items"
            render={routerProps => (
              <ItemContainer
                API_ITEM={API_ITEM}
                user={this.props.user}
                items={items}
              />
            )}
          />

          <div className="container-fluid d-flex justify-content-center">
            <div className="col-md-3">
              <MainMenuCard
                image={image1}
                title="Browse Our Items"
                description="Browse our 10,000+ items, Search, & even find the Location of an item!"
                link="/main/items"
              />
            </div>
            <div className="col-md-3">
              <MainMenuCard
                image={image2}
                title="Browse Our Recipes"
                description="Try something new today with our World Class Recipes at your fingertips! "
                link="main/recipes"
              />
            </div>
            <div className="col-md-3">
              <MainMenuCard
                image={image3}
                title="Chef Connect"
                description="Chat Live with one of our award-winning chefs who can help you make a great meal today!"
                link="main/chefconnect"
              />
            </div>
          </div>
        </Switch>
      </div>
    );
  }
}

export default MainMenu;
