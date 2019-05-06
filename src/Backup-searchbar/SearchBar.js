import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import "../../Styling/ItemContainer/SearchBar.css";

class SearchBar extends React.Component {
  state = {
    name: "",
    clicked: false
  };

  onChangeHandler = e => {
    console.log("changing?????", e.target.value);

    // this.setState({ [e.target.name]: e.target.value, clicked: this.state.clicked });
    this.props.onChangeHandler(e.target.value);
  };

  // this.setState({ searchTerm: e.target.value });

  // submitHandler = e => {
  //   // this.props.history.push("/items");
  //   let searchTerm = this.state.searchTerm;
  //   this.props.submitHandler(searchTerm);
  // };

  onClickHandler = e => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    //   <Form inline>
    //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //     <Button variant="outline-light">Search</Button>
    //   </Form>

    // <Button
    //   className="mr-5"
    //   variant="outline-dark"
    //   onClick={this.submitHandler}
    // >
    //   {" "}
    //   Search{" "}
    // </Button>
    //
    return (
      <div>
        {this.state.clicked ? (
          <Form inline className="search">
            <input
              onChange={this.onChangeHandler}
              className="search-bar"
              type="text"
              placeholder="Search"
              value={this.props.searchTerm}
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
