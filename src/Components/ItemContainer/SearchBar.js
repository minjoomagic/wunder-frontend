import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import "../../Styling/ItemContainer/SearchBar.css";

class SearchBar extends React.Component {
  state = {
    name: "",
    clicked: false,
    searchTerm: ""
  };

  onChangeHandler = e => {
    this.setState(
      {
        searchTerm: e.target.value,
        clicked: this.state.clicked
      },
      () => this.props.onChangeHandler(this.state.searchTerm)
      // because async the typed letters was lagging by one. By making this an anonymous callback function now in sync.
    );

    console.log("changing?????", e.target.value);
    // console.log(e.target.value);
  };

  onClickHandler = e => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        {this.state.clicked ? (
          <Form inline className="search">
            <input
              onChange={this.onChangeHandler}
              className="search-bar"
              type="text"
              placeholder="Search"
              value={this.state.searchTerm}
            />
          </Form>
        ) : (
          <Button className="mr-5" variant="dark" onClick={this.onClickHandler}>
            {" "}
            Click to Search{" "}
          </Button>
        )}
      </div>
    );
  }
}

export default withRouter(SearchBar);
