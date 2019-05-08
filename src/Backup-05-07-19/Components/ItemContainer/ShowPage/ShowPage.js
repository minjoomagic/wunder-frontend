import React from "react";
import "../../../Styling/ItemContainer/ShowPage/ShowPage.css";
import ItemShow from "./ItemShow";
import ItemInfo from "./ItemInfo";
import ItemMap from "./ItemMap";

class ShowPage extends React.Component {
  render() {
    return (
      <div className="view">
        <div className="left-side">
          <div className="item-main">
            <ItemShow item={this.props} />
          </div>
        </div>
        <div className="right-side">
          <ItemInfo item={this.props} />
          <ItemMap item={this.props} />
        </div>
      </div>
    );
  }
}

export default ShowPage;
