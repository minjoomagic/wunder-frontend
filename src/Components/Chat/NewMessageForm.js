import React from "react";
import { API_ROOT, HEADERS, HEADERS_SPECIAL } from "../../Constants";
import { Button } from "react-bootstrap";
import "../../Styling/Chat/MessagesArea.css";

class NewMessageForm extends React.Component {
  state = {
    text: "",
    chat_id: this.props.chat_id,
    user: this.props.user
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ chat_id: nextProps.chat_id, user: nextProps.user });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: "" });
  };

  handleSMS = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: "POST",
      headers: HEADERS_SPECIAL,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: "" });
  };

  render = () => {
    console.log("what is my user???", this.props.user);
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            className="chat-input"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <Button className="msg-button" type="submit">
            Send
          </Button>
          {this.props.user.username === "robby" ? (
            <Button
              className="sms-button"
              variant="info"
              type="submit"
              onClick={this.handleSMS}
            >
              SMS
            </Button>
          ) : null}
          {this.props.user.username === "bobby" ? (
            <Button
              className="sms-button"
              variant="info"
              type="submit"
              onClick={this.handleSMS}
            >
              SMS
            </Button>
          ) : null}
          {this.props.user.username === "morimoto" ? (
            <Button
              className="sms-button"
              variant="info"
              type="submit"
              onClick={this.handleSMS}
            >
              SMS
            </Button>
          ) : null}
          {this.props.user.username === "batali" ? (
            <Button
              className="sms-button"
              variant="info"
              type="submit"
              onClick={this.handleSMS}
            >
              SMS
            </Button>
          ) : null}
        </form>
      </div>
    );
  };
}

export default NewMessageForm;
