import React from "react";
import "../../../Styling/ItemContainer/ShowPage/ItemInfo.css";
import { Card, Container, Col, Image, Button } from "react-bootstrap";
import { capitalize } from "../../../Utilities/Utilities";

class ItemInfo extends React.Component {
  state = {
    description: false
  };

  clickDescriptionHandler = () => {
    this.setState({ description: !this.state.description });
  };

  render() {
    this.props.item.item
      ? console.log(this.props.item.item.name)
      : console.log("nada");
    console.log("this is my item's info: ", this.props.item.item);
    return (
      <Container className="item-container">
        {this.props.item.item ? (
          <Card className="card-item">
            <i className="fas fa-info-circle fa-5x">
              <p className="item-name">
                Location:
                <br />
                {this.props.item.item.name}
              </p>
            </i>
            <br />

            <Button
              variant="light"
              className="description-button mr-2"
              onClick={this.clickDescriptionHandler}
            >
              {" "}
              Description
            </Button>
            {this.state.description ? (
              <h5> {this.props.item.item.description}</h5>
            ) : null}
          </Card>
        ) : null}
      </Container>
    );
  }
}

export default ItemInfo;
