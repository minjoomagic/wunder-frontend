import React from "react";
import { Button } from "react-bootstrap";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import logo from "../../Images/star.png";
import "../../Styling/LogIn-SignUp/SignUp.css";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phoneNumber: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCreateUserHandler = () => {
    this.props.onCreateUserHandler(this.state);
  };

  render() {
    return (
      <div className="signup-style">
        <Jumbotron>
          <h1 className="wunder-signup">Become Wunderful</h1>
          <p>SignUp for Wunder and wonder no more.</p>
          <p>
            <Button className="mr-2" variant="primary" href="/login">
              LogIn
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
                    placeholder="Password"
                    className="input-style"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    onChange={this.onChangeHandler}
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="input-style"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="phoneNumber">Phone Number</Label>
                  <Input
                    onChange={this.onChangeHandler}
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="input-style"
                  />
                </FormGroup>
              </Col>
              <Button variant="primary" onClick={this.onCreateUserHandler}>
                Create Account
              </Button>
            </Form>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Signup;
