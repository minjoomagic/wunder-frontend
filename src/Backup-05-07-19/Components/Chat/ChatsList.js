import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { API_ROOT } from "../../Constants";
import NewChatForm from "./NewChatForm";
import MessagesArea from "./MessagesArea";
import Cable from "./Cable";
import "../../Styling/Chat/ChatsList.css";

class ChatsList extends React.Component {
  state = {
    chats: [],
    activeChat: null
    // user: this.props.user
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/chats`)
      .then(res => res.json())
      .then(chats => this.setState({ chats }));
  };

  handleClick = id => {
    this.setState({ activeChat: id });
  };

  handleReceivedChat = response => {
    const { chat } = response;
    this.setState({
      chats: [...this.state.chats, chat]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const chats = [...this.state.chats];
    const chat = chats.find(chat => chat.id === message.chat_id);
    chat.messages = [...chat.messages, message];
    this.setState({ chats });
  };

  // deleteHandler = e => {
  //   console.log("in handelr", e);
  // };

  render = () => {
    const { chats, activeChat } = this.state;
    console.log("oin chats list USER:", this.props);
    // -------------------so weird that line 43 classname and line 55 chats if same name then double results-----
    return (
      <div className="chattybox">
        <ActionCableConsumer
          channel={{ channel: "ChatsChannel" }}
          onReceived={this.handleReceivedChat}
        />
        {this.state.chats.length ? (
          <Cable
            chats={chats}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>Currently Available Chefs:</h2>
        <ul>{mapChats(chats, this.handleClick, this.props.user)}</ul>

        <NewChatForm user={this.props.user} />

        {activeChat && this.props.user ? (
          <MessagesArea
            user={this.props.user}
            chat={findActiveChat(chats, activeChat)}
          />
        ) : null}
      </div>
    );
  };
}

export default ChatsList;

// helpers

const findActiveChat = (chats, activeChat) => {
  return chats.find(chat => chat.id === activeChat);
};

const mapChats = (chats, handleClick) => {
  return chats.map(chat => {
    return (
      <li className="chat-card">
        <button key={chat.id} onClick={() => handleClick(chat.id)}>
          Chat Room: {chat.title}
        </button>
      </li>
    );
  });
};
