import React from "react";
import "../../../Styling/ItemContainer/ShowPage/ItemMap.css";
import { Image, Spinner } from "react-bootstrap";

class ItemMap extends React.Component {
  render() {
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
