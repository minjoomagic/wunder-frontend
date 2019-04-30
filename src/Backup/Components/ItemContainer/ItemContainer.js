import React from "react";
import { Route, Switch } from "react-router-dom";
import ItemCard from "./ItemCard";
import ShowPage from "./ShowPage";
import "../../Styling/ItemContainer/ItemContainer.css";

const ItemContainer = props => {
  let items = props.items.map(item => <ItemCard key={item.id} item={item} />);

  return (
    <div>
      <Switch>
        <Route
          path="/items/:id"
          render={routerProps => {
            let id = parseInt(routerProps.match.params.id);
            // console.log("items are:", props.items)
            let item = props.items.find(item => item.id === id);
            return <ShowPage item={item} />;
          }}
        />
        <Route
          path="/items"
          render={() => {
            return <div className="item-collection">{items}</div>;
          }}
        />
      </Switch>
    </div>
  );
};

export default ItemContainer;
