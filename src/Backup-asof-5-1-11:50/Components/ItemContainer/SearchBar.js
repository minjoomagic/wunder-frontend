import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  onChangeHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };

  submitHandler = e => {
    this.props.history.push("/items");
    let searchTerm = this.state.searchTerm;
    this.props.submitHandler(searchTerm);
  };

  render() {
    //   <Form inline>
    //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //     <Button variant="outline-light">Search</Button>
    //   </Form>
    //
    return (
      <div>
        <Form inline>
          <FormControl
            onChange={this.onChangeHandler}
            className="mr-sm-3"
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
      </div>
    );
  }
}

export default withRouter(SearchBar);
