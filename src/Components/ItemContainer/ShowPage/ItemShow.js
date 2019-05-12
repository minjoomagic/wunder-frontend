import React from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../../../Utilities/Utilities";
import { Button, Card } from "react-bootstrap";
import "../../../Styling/ItemContainer/ItemCard.css";

const ItemShow = props => {
  console.log("props from ItemShow", props.item);
  let {
    name,
    image_url,
    category,
    description,
    price,
    sold_by
  } = props.item.item;

  const favHandler = e => {
    e.preventDefault();
    console.log("favoriting this", e);
    console.log("favoriting this2", props.item);
    props.item.favHandler(props.item);
  };

  console.log("This is my user in ITEMSHOW", props.user);

  return (
    <Card className="show-card">
      <img className="show-image" src={image_url} alt="" />
      <Card.Body>
        <Card.Title>
          <h1>{name}</h1>
        </Card.Title>
        <Card.Text>
          <h3>Category: {capitalize(category)}</h3>
        </Card.Text>
        <Card.Text>
          <h3>
            Price: ${price}
            {sold_by}{" "}
          </h3>
        </Card.Text>
      </Card.Body>
      <Link to={"/main/items"}>
        <Button className="mr-2">Back</Button>
        {props.item.user ? (
          <Button variant="success" onClick={favHandler}>
            {" "}
            Favorite{" "}
          </Button>
        ) : null}
      </Link>
    </Card>
  );
};

export default ItemShow;
