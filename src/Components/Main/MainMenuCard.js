import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Styling/Main/MainMenuCard.css";

import Alert from "../../Components/Alert";

const MainMenuCard = props => {
  return (
    <div className="card text-center ">
      <div className="overflow">
        <img src={props.image} alt="" className="card-img-top" />
      </div>
      <div className="mainmenu-body text-dark">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text text-secondary">{props.description}</p>
        <h1 className="alert">{props.alert}</h1>
        <Link to={`${props.link}`}>
          <p className="btn btn-outline-dark">{props.buttonInfo}</p>
        </Link>
      </div>
    </div>
  );
};

export default MainMenuCard;
