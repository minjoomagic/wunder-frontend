import React from "react";
import { Route, Switch } from "react-router-dom";
import ItemCard from "./ItemCard";
import ShowPage from "./ShowPage";
import "../../Styling/ItemContainer/ItemContainer.css";

class ItemContainer extends React.Component {
  state = {
    items: []
  };

  // ================= Fetch Data =====================
  componentDidMount() {
    console.log("Main did mount");
    this.setState({ user: this.props.user });
    this.fetchItems();
    // this.fetchCategories();
  }

  // ----------------- Fetch Items ---------------------
  fetchItems = () => {
    console.log("items Fetch starting");
    fetch(this.props.API_ITEM)
      .then(res => res.json())
      .then(items => {
        this.setState(
          { items: items },
          console.log("these are my items", items)
        );
      });
  };

  render() {
    console.log("this is my user in ItemCont:", this.props.user);
    let items = this.state.items.map(item => (
      <ItemCard key={item.id} item={item} />
    ));

    return <div className="item-collection">{items}</div>;
  }
}

export default ItemContainer;
