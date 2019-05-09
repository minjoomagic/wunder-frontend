import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { capitalize } from "../../Utilities/Utilities";

import "../../Styling/ItemContainer/ItemCard.css";
import "../../Styling/ItemContainer/ItemSFX.css";

class ItemCard extends React.Component {
  favHandler = e => {
    console.log("EEEEEEEE", e);
    console.log("props USERRR in itemcards:", this.props.user);
    console.log("props ITEMSSSS in itemcards:", this.props.item);
    e.preventDefault();
    this.props.favHandler(this.props);
  };

  render() {
    let {
      name,
      category,
      price,
      image_url,
      description,
      sold_by
    } = this.props.item;

    // https://i.imgur.com/moNVObQ.png Whole foods logo
    // https://i.imgur.com/nlpuKqF.png Wunder logo
    // https://cdn.shopify.com/s/files/1/1071/7482/t/10/assets/logo.png?1 H&Y LOGO

    return (
      <React.Fragment>
        <div className="container">
          {this.props.item.image_url ? (
            <div className="row">
              <div className="item-grid">
                <div className="item-image">
                  <Link to={`/main/items/${this.props.item.id}`}>
                    <a href="#">
                      <img className="picture-1" src={image_url} />
                      <img
                        className="picture-2"
                        src="https://i.imgur.com/moNVObQ.png "
                      />
                    </a>
                  </Link>
                  <ul className="social">
                    <li>
                      <Link to={`/main/items/${this.props.item.id}`}>
                        <a href="#" data-tip="Quick View">
                          <i className="fa fa-eye" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                  {this.props.user ? (
                    <a className="add-to-fav" href="" onClick={this.favHandler}>
                      Add to Favorites
                    </a>
                  ) : null}
                </div>
                <div className="item-content">
                  <h3 className="title">
                    <Link to={`/main/items/${this.props.item.id}`}>
                      <p>{name}</p>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default ItemCard;
