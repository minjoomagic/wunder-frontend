import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { API_ROOT } from "../../Constants";
import NewChatForm from "./NewChatForm";
import MessagesArea from "./MessagesArea";
import Cable from "./Cable";
import "../../Styling/Chat/ChatsList.css";
import { Image, Button } from "react-bootstrap";

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
  //
  // <Image src="https://i.imgur.com/RB3CD1D.png" roundedCircle />
  // <h3>Iron Chef Batali</h3>
  // <h4>Specialty: Italian</h4>
  // <br />
  // <br />

  render = () => {
    const { chats, activeChat } = this.state;
    console.log("in chats list USER:", this.props);
    // -------------------so weird that line 57 classname and line 111 chats if same name then double results-----
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
          <Image src="  https://i.imgur.com/sY26Rza.png" roundedCircle />
          <h3>Iron Chef Bobby Flay</h3>
          <h4>Specialty: Southwest</h4>

          <br />
          <br />

          <Image src="https://i.imgur.com/zxqx6Rq.png" roundedCircle />
          <h3>Iron Chef Morimoto</h3>
          <h4>Specialty: Japanese</h4>
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

export default ChatsList;

// helpers

const findActiveChat = (chats, activeChat) => {
  return chats.find(chat => chat.id === activeChat);
};

const mapChats = (chats, handleClick) => {
  return chats.map(chat => {
    return (
      <div className="chat-box">
        <div className="row">
          <div className="item-grid">
            <div className="itm-image">
              <div>
                <br />
                <br />
                <div>
                  <br />
                  <div />
                  <br />
                  <div
                    className="live"
                    key={chat.id}
                    onClick={() => handleClick(chat.id)}
                  >
                    <Button
                      key={chat.id}
                      onClick={() => handleClick(chat.id)}
                      variant="secondary"
                    >
                      Live: Chef {chat.title}
                    </Button>
                  </div>
                  <a href="#">
                    <img className="picture-2" />
                  </a>
                  <div />
                  <br />
                  <div />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div className="item-content" />
            </div>
          </div>
        </div>
      </div>
    );
  });
};
