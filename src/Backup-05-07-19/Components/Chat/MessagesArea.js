import React from "react";
import NewMessageForm from "./NewMessageForm";

const MessagesArea = props => {
  //
  console.log("Messages area CHAT props:", props);
  console.log("Messages area USER props:", props.chat.messages);
  return (
    <div className="messagesArea">
      <h2>Chat Room: {props.chat.title}</h2>
      <h4>Chatting as: {props.user.username}</h4>
      <p className="Message-content">{orderedMessages(props.chat.messages)}</p>
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
    return (
      <li key={message.id}>
        {message.user}*: {message.text}
      </li>
    );
  });
};
