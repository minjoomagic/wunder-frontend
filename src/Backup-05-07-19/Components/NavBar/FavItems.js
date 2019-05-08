import React from "react";
import FavsCard from "./FavsCard";

class FavItems extends React.Component {
  render() {
    console.log("IN FAV ITEMS", this.props.items);
    let items = this.props.items.map(item => (
      <FavsCard key={item.id} item={item} />
    ));
    return (
      <div>
        <div>{items}</div>
      </div>
    );
  }
}

export default FavItems;
