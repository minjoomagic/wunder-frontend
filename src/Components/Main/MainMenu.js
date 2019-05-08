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
import ChatsList from "../../Components/Chat/ChatsList";

import SearchBar from "../ItemContainer/SearchBar";

import Alert from "../../Components/Alert";

const API_ITEM = "http://localhost:3000/items";
const API_RECIPE = "http://localhost:3000/recipes";

class MainMenu extends React.Component {
  state = {
    items: [],
    user: null,
    searchTerm: ""
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

  // ----------------- Fuzzy Search Items ---------------------
  onChangeHandler = searchTerm => {
    console.log("now back in Main", searchTerm);
    this.setState({ searchTerm: searchTerm });
  };

  filteredItems = () => {
    console.log("%c In the FILTERED ITEMS!!!!", "color:blue", this.state.items);
    return this.state.items.filter(item => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
  };

  // ----------------- Favorite Items ---------------------
  favHandler = favItem => {
    console.log("back up in main menu", favItem);
    let user = this.props.user;

    console.log("this is my user:", user);
    console.log("this is my item:", favItem);

    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: user, item: favItem })
    };
    console.log("this is my item in main:", favItem);
    fetch(`http://localhost:3000/favorites`, config).then(resp => {
      if (resp.status === 204) {
        this.fetchItems();
        this.props.history.push("/main/items");
      } else {
        window.alert("successfully favorited!");
      }
    });
  };

  render() {
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
                items={this.filteredItems()}
                onChangeHandler={this.onChangeHandler}
                searchTerm={this.state.searchTerm}
                favHandler={this.favHandler}
              />
            )}
          />

          <Route
            path="/main/chef"
            render={routerProps => <ChatsList user={this.props.user} />}
          />

          <div className="container-fluid d-flex justify-content-center">
            <div className="col-md-3">
              <MainMenuCard
                image={image1}
                title="Browse Our Items"
                description="Browse our 10,000+ items, Search, & even find the Location of an item!"
                link="/main/items"
                buttonInfo="Click Here"
              />
            </div>

            <div className="col-md-3">
              {localStorage.token ? (
                <MainMenuCard
                  image={image2}
                  title="Browse Our Recipes"
                  description="Try something new today with our World Class Recipes at your fingertips! "
                  link=""
                  buttonInfo="COMING SOON"
                />
              ) : (
                <MainMenuCard
                  image={image2}
                  title="Browse Our Recipes"
                  description="Try something new today with our World Class Recipes at your fingertips! "
                  link="/login"
                  alert="Please Login"
                  buttonInfo="Login"
                />
              )}
            </div>
            <div className="col-md-3">
              {localStorage.token ? (
                <MainMenuCard
                  image={image3}
                  title="Chef Connect"
                  description="Chat Live with one of our award-winning chefs who can help you make a great meal today!"
                  link="main/chef"
                  buttonInfo="Click Here"
                />
              ) : (
                <MainMenuCard
                  image={image3}
                  title="Chef Connect"
                  description="Chat Live with one of our award-winning chefs who can help you make a great meal today!"
                  link="/login"
                  alert="Please Login"
                  buttonInfo="Login"
                />
              )}
            </div>
          </div>
        </Switch>
      </div>
    );
  }
}

export default MainMenu;
