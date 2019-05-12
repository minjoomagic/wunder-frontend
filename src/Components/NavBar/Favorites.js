import React from "react";
import { Link } from "react-router-dom";
import FavItems from "./FavItems";

import "../../Styling/NavBar/Favorites.css";

class Favorites extends React.Component {
  state = {
    items: [],
    user: null
  };

  componentDidMount() {
    console.log("User Profile Did Mount!");
    this.fetchItems();
    // this.favoriteItems();
  }

  fetchItems = () => {
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(
        items => {
          this.setState({
            items: items,
            user: this.props.user
          });
        },
        () => this.favoriteItems()
      );
  };

  favoriteItems = () => {
    console.log("%c In the FAV ITEMS!!!!", "color:green", this.state.items);
    return this.state.items.filter(item => {
      return item.users[0].username === this.state.user.username;
    });
  };

  render() {
    console.log("hereeeeee", this.state.items);

    // let favoriteItems = this.state.items.filter(
    //   item => item.users[0].username === this.state.user.username
    // );

    console.log("hereeeeee2222", this.state.items);
    let myItems = this.state.items;

    // let myRecipes = this.state.items.filter(
    //   item =>
    //     item.users[0].username === this.state.user.username
    //
    // );

    // <div className="user-right-side">
    //   <h2 className="fas fa-history"> My Recipes </h2>
    //   <UserPurchases items={myRecipes} />
    // </div>

    return (
      <div>
        <div className="user-view">
          <div />
          <div className="user-left-side">
            <h2 className="favorites"> My Favorite Items </h2>
            <FavItems items={myItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
