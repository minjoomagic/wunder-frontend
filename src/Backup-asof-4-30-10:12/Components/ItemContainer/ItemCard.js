import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { capitalize } from "../../Utilities/Utilities";
// import "../../Styling/ItemContainer/Item.css";
import "../../Styling/ItemContainer/ItemCard.css";

// FOCUS WORK HERE, THIS IS WHERE WE HANDLE WHERE WE COME FROM TO EXECUTE DIFFERENT COMMANDS
class ItemCard extends React.Component {
  render() {
    let { name, category, price, image_url, description } = this.props.item;

    return (
      <React.Fragment>
        <div>
          <div style={{ width: "18rem" }} className="abc-item-card">
            <Link to={`/main/items/${this.props.item.id}`}>
              <img className="abc-item-image" variant="top" src={image_url} />
            </Link>
            <h3>{name}</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemCard;
