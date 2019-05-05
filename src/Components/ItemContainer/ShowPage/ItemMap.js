import React from "react";
import "../../../Styling/ItemContainer/ShowPage/ItemMap.css";

class ItemMap extends React.Component {
  render() {
    console.log("ITEMMAP item:", this.props.item.item);
    return (
      <div className="item-map">
        <img className="map-image" src="https://i.imgur.com/P34xHmP.jpg" />
        <h1 className={this.props.item.item.store_items[0].location}>
          <i className="fas fa-map-pin fa-2x" />
        </h1>
        <img className="map-here" src="https://i.imgur.com/h85eRgf.png" />
      </div>
    );
  }
}

export default ItemMap;

// something like       <h1 className={this.props.aisle}>o</h1> className={this.props.item.item.store_items[0].location}>o</h1>
// Then in css file you would make like redux case stmts for every aisle possibility 1-10
