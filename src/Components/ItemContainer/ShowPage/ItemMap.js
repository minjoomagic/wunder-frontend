import React from "react";
import "../../../Styling/ItemContainer/ShowPage/ItemMap.css";
import { Image, Spinner } from "react-bootstrap";

class ItemMap extends React.Component {
  render() {
    // <i className="fas fa-map-pin fa-2x" />
    return (
      <div className="item-map">
        <img className="map-image" src="https://i.imgur.com/P34xHmP.jpg" />
        <h1 className={this.props.item.item.store_items[0].location}>
          <Spinner animation="grow" variant="light">
            <Image
              className="map-pic"
              src={this.props.item.item.image_url}
              roundedCircle
            />
          </Spinner>
        </h1>
        <img className="map-here" src="https://i.imgur.com/h85eRgf.png" />
      </div>
    );
  }
}

export default ItemMap;

// something like       <h1 className={this.props.aisle}>o</h1> className={this.props.item.item.store_items[0].location}>o</h1>
// Then in css file you would make like redux case stmts for every aisle possibility 1-10
