import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { capitalize } from "../../Utilities/Utilities";

import "../../Styling/ItemContainer/ItemCard.css";
import "../../Styling/ItemContainer/ItemSFX.css";

// FOCUS WORK HERE, THIS IS WHERE WE HANDLE WHERE WE COME FROM TO EXECUTE DIFFERENT COMMANDS
class ItemCard extends React.Component {
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
                        src="https://cdn.shopify.com/s/files/1/1071/7482/t/10/assets/logo.png?1"
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
                    <a className="add-to-fav" href="">
                      Add to Favorites
                    </a>
                  ) : null}
                </div>
                <div className="item-content">
                  <h3 className="title">
                    <a href={`/main/items/${this.props.item.id}`}>{name}</a>
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
