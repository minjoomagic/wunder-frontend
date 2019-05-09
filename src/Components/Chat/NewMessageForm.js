import React from "react";
import { API_ROOT, HEADERS } from "../../Constants";
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

  render = () => {
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
        </form>
      </div>
    );
  };
}

export default NewMessageForm;
