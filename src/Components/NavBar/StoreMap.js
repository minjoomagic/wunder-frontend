import React from "react";
import "../../Styling/NavBar/StoreMap.css";
import { Image, Spinner } from "react-bootstrap";

class StoreMap extends React.Component {
  render() {
    return (
      <div className="store-map">
        <img
          className="store-image"
          src="https://i.imgur.com/P34xHmP.jpg"
          alt=""
        />
        <Spinner className="store-here" animation="grow" variant="secondary">
          <Image className="" src="https://i.imgur.com/h85eRgf.png" />
        </Spinner>
      </div>
    );
  }
}

export default StoreMap;
