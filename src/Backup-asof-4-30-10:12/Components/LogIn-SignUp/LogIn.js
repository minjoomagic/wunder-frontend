import React from "react";

import { withRouter } from "react-router-dom";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import NavBar from "../NavBar/NavBar";
import "../../Styling/LogIn-SignUp/LogIn.css";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginHandler = () => {
    this.props.onLoginHandler(this.state);
  };

  render() {
    return (
      <div className="login-style">
        <div>{this.NavBar}</div>
        <Jumbotron>
          <h1 className="wunder-login">Login</h1>
          <p>Have a Wunderful day!</p>
          <p>
            <Button className="mr-2" variant="primary" href="/signup">
              Sign Up
            </Button>

            <Button className="mr-2" variant="success" href="/main">
              Main Menu
            </Button>
          </p>

          <Container className="App">
            <Form className="form">
              <Col>
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    onChange={this.onChangeHandler}
                    type="text"
                    name="username"
                    placeholder="My Username"
                    className="input-style"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    onChange={this.onChangeHandler}
                    type="password"
                    name="password"
                    placeholder="********"
                    className="input-style"
                  />
                </FormGroup>
              </Col>
              <Button variant="primary" onClick={this.onLoginHandler}>
                Log in
              </Button>
            </Form>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default withRouter(Login);
