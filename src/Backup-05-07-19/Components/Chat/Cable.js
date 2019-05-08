import React, { Fragment } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";

const Cable = ({ chats, handleReceivedMessage }) => {
  return (
    <Fragment>
      {chats.map(chat => {
        return (
          <ActionCableConsumer
            key={chat.id}
            channel={{
              channel: "MessagesChannel",
              chat: chat.id
            }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;
