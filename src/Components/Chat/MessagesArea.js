import React from "react";
import NewMessageForm from "./NewMessageForm";

const MessagesArea = props => {
  //
  console.log("Messages area CHAT props:", props);
  console.log("Messages area USER props:", props.user);
  return (
    <div className="messagesArea">
      <h2>{props.chat.title}</h2>
      <h1>{props.user.username}</h1>
      <ul>{orderedMessages(props.chat.messages)}</ul>
      <NewMessageForm chat_id={props.chat.id} user={props.user} />
    </div>
  );
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <li key={message.id}>{message.text}</li>;
  });
};
