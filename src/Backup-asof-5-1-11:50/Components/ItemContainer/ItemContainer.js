import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ItemCard from "./ItemCard";
import ShowPage from "./ShowPage/ShowPage";
import "../../Styling/ItemContainer/ItemContainer.css";
import SearchBar from "./SearchBar";

const ItemContainer = props => {
  let items = props.items.map(item => (
    <ItemCard key={item.id} item={item} user={props.user} />
  ));
  console.log("this is my user in ItemCont:", props.user);

  return (
    <div>
      <Switch>
        <Route
          path="/main/items/:id"
          render={routerProps => {
            console.log("#(@#(#(#!(#!#(#())))))");
            let id = parseInt(routerProps.match.params.id);
            console.log("items are:", props.items);
            let item = props.items.find(item => item.id === id);
            return <ShowPage item={item} user={props.user} />;
          }}
        />
        <Route
          path="/main/items"
          render={() => {
            return (
              <div>
                <SearchBar />
                <div className="item-collection">{items}</div>
              </div>
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default ItemContainer;
