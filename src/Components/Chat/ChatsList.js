import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { API_ROOT } from "../../Constants";
import NewChatForm from "./NewChatForm";
import MessagesArea from "./MessagesArea";
import Cable from "./Cable";
import "../../Styling/Chat/ChatsList.css";
import { Image } from "react-bootstrap";

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
        <div>
          <h1>Chefs on Staff:</h1>
          <br />
          <br />
          <Image src="https://i.imgur.com/OcwwDwM.png" roundedCircle />
          <h3>Iron Chef Morimoto</h3>
          <h4>Specialty: Japanese</h4>
          <br />
          <br />
          <Image src="https://i.imgur.com/RB3CD1D.png" roundedCircle />
          <h3>Iron Chef Batali</h3>
          <h4>Specialty: Italian</h4>
          <br />
          <br />
          <Image src="  https://i.imgur.com/sY26Rza.png" roundedCircle />
          <h3>Iron Chef Bobby Flay</h3>
          <h4>Specialty: Southwest</h4>
        </div>

        <div>{mapChats(chats, this.handleClick, this.props.user)} </div>

        {activeChat && this.props.user ? (
          <MessagesArea
            user={this.props.user}
            chat={findActiveChat(chats, activeChat)}
          />
        ) : null}
        {this.props.user.username === "robby" ? (
          <NewChatForm user={this.props.user} />
        ) : null}
      </div>
    );
  };
}

// <li className="chat-card">
//   <button key={chat.id} onClick={() => handleClick(chat.id)}>
//     Chat Room: {chat.title}
//   </button>
// </li>

export default ChatsList;

// helpers

const findActiveChat = (chats, activeChat) => {
  return chats.find(chat => chat.id === activeChat);
};

const mapChats = (chats, handleClick) => {
  return chats.map(chat => {
    return (
      <div
        className="chat-box"
        key={chat.id}
        onClick={() => handleClick(chat.id)}
      >
        <div className="row">
          <div className="item-grid">
            <div className="item-image">
              <a href="#">
                <img
                  className="picture-1"
                  src="https://cdn.pixabay.com/photo/2016/11/30/18/14/chat-1873536_960_720.png"
                />
                <img
                  className="picture-2"
                  src="https://aavtech.site/wp-content/uploads/2018/10/Message2Artboard-2-360x240.png"
                />
              </a>
              <div className="item-content">
                <h3 className="title">
                  <p>Chat Room: {chat.title}</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
