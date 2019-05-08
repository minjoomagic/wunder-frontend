import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { capitalize } from "../../Utilities/Utilities";
import "../../Styling/NavBar/FavsCard.css";

class FavsCard extends React.Component {
  render() {
    let {
      name,
      category,
      price,
      sold_by,
      image_url,
      description
    } = this.props.item;

    let { location } = this.props.item.store_items[0];

    return (
      <React.Fragment>
        <div>
          <Card
            className="my-item-card"
            style={{ "margin-left": "200px", width: "18rem" }}
          >
            <Card.Img className="my-item-image" variant="top" src={image_url} />
            <Card.Body>
              <Card.Title>
                <h3>{capitalize(name)}</h3>
              </Card.Title>
              <Card.Text>Category: {capitalize(category)}</Card.Text>
              <Card.Text>
                Price: ${price}
                {sold_by}{" "}
              </Card.Text>
              <Card.Text>Description: {capitalize(description)}</Card.Text>
              <Card.Text>Location: {location}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default FavsCard;
