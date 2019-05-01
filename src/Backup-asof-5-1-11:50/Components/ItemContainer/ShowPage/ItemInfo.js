import React from "react";
import "../../../Styling/ItemContainer/ShowPage/ItemInfo.css";
import { Card, Container, Col, Image, Button } from "react-bootstrap";
import { capitalize } from "../../../Utilities/Utilities";

class ItemInfo extends React.Component {
  state = {
    category: false,
    address: false
  };

  clickCategoryHandler = () => {
    this.setState({ category: !this.state.category });
  };

  clickPriceHandler = () => {
    this.setState({ price: !this.state.price });
  };

  render() {
    this.props.item.item
      ? console.log(this.props.item.item.name)
      : console.log("akh");
    console.log("this is my item's info: ", this.props.item.item);
    return (
      <Container className="item-container">
        {this.props.item.item ? (
          <Card className="card-item">
            <i className="fas fa-info-circle fa-5x">
              <p className="item-name">Name: {this.props.item.item.name}</p>
            </i>
            <br />

            <Button
              variant="light"
              className="fas fa-mobile-alt mr-2"
              onClick={this.clickCategoryHandler}
            >
              {" "}
              Category
            </Button>
            {this.state.category ? (
              <h3>Category: {this.props.item.item.category}</h3>
            ) : null}

            <Button
              variant="light"
              className="fas fa-map-marked-alt mr-2"
              onClick={this.clickPriceHandler}
            >
              Price
            </Button>
            {this.state.price ? (
              <h3>Price: ${this.props.item.item.price}</h3>
            ) : null}
          </Card>
        ) : null}
      </Container>
    );
  }
}

export default ItemInfo;
