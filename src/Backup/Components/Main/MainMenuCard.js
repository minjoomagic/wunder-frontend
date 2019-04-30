import React from "react";

const MainMenuCard = props => {
  return (
    <div className="card text-center ">
      <div className="overflow">
        <img src={props.image} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.description}</p>
        <a href={props.href} className="btn btn-outline-success">
          Click Here
        </a>
      </div>
    </div>
  );
};

export default MainMenuCard;
