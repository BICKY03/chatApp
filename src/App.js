import React, { useState } from "react";
import "./ChatApp.css"; // Import CSS file for styles

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatInputBox = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="chat-input-box">
      <input type="text" value={message} onChange={handleChange} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <strong>{message.user}: </strong>
      {message.text}
    </div>
  );
};

const ChatMessageThread = ({ messages }) => {
  return (
    <div className="chat-message-thread">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
};

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = { user: randomUser, text };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-app">
      <h1>Chat Application</h1>
      <ChatMessageThread messages={messages} />
      <ChatInputBox sendMessage={sendMessage} />
    </div>
  );
};

export default ChatApp;