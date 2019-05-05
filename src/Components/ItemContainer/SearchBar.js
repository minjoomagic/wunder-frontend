import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import "../../Styling/ItemContainer/SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
    clicked: false
  };

  onChangeHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };

  submitHandler = e => {
    // this.props.history.push("/items");
    let searchTerm = this.state.searchTerm;
    this.props.submitHandler(searchTerm);
  };

  onClickHandler = e => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    //   <Form inline>
    //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //     <Button variant="outline-light">Search</Button>
    //   </Form>
    //
    return (
      <div>
        {this.state.clicked ? (
          <Form inline className="search">
            <FormControl
              onChange={this.onChangeHandler}
              className="search-bar"
              type="text"
              placeholder="Search"
              name="search"
              value={this.state.searchTerm}
            />
            <Button
              className="mr-5"
              variant="outline-dark"
              onClick={this.submitHandler}
            >
              {" "}
              Search{" "}
            </Button>
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
