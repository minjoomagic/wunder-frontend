import React from "react";
import NewMessageForm from "./NewMessageForm";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Styling/Chat/MessagesArea.css";

const MessagesArea = props => {
  //
  console.log("Messages area CHAT props:", props);
  console.log("Messages area USER props:", props.chat.messages);
  return (
    <div className="messagesArea">
      <h2>Chat Room: {props.chat.title}</h2>
      <br />
      <h5>Chatting as: {props.user.username}</h5>
      <br />
      <br />
      <p className="">
        {orderedMessages(props.user.username, props.chat.messages)}
      </p>
      <br />
      <br />
      <NewMessageForm chat_id={props.chat.id} user={props.user} />
      <br />
      <Link to={"/main"}>
        <Button variant="danger">Leave</Button>
      </Link>
    </div>
  );
};

export default MessagesArea;

// helpers

const orderedMessages = (user, messages) => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return user === message.user ? (
      <div key={message.id}>
        <span class="dot-me" />
        <h5 className="username-me">{message.user}:</h5>
        <h4 className="msg-me">{message.text}</h4>
      </div>
    ) : (
      <div key={message.id}>
        <span class="dot-guest" />
        <h5 className="username-guest">{message.user}:</h5>
        <h4 className="msg-guest">{message.text}</h4>
      </div>
    );
  });
};
