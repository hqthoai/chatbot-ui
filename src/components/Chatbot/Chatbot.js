import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import chatbot from "../../assets/logo.png";
import user from "../../assets/user.png";
import Header from "./Header/Header";
import Input from "./Input/Input";
import "./chatbot.css";

const apiUrl = "http://localhost:5000";
function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm a bot. How can I help you today?",
      avatar: chatbot,
    },
  ]);
  const chatOutputRef = useRef(null);

  const sendQuestion = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input, avatar: user },
    ]);
    setInput("");
    axios
      .post(`${apiUrl}/home`, { message: input })
      .then((response) => {
        const botResponse = response.data.top.res;
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: botResponse, avatar: chatbot },
        ]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (chatOutputRef.current) {
      chatOutputRef.current.scrollTop = chatOutputRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div
        className="relative flex flex-col md:w-2/3 w-full bg-[#dadaf3]"
        style={{ height: "calc(100vh - 80px)" }}>
        <div
          className="chat-output flex flex-col p-5 overflow-y-auto"
          style={{ height: "calc(100vh - 80px - 96px)" }}
          ref={chatOutputRef} // Attach the reference here
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "bot" ? "bot-message " : "user-message"
              }>
              {msg.sender === "bot" ? (
                <>
                  <img
                    className="w-[45px] h-[45px] mr-1"
                    src={msg.avatar}
                    alt="bot"
                  />
                  <div className="message">
                    <TypeAnimation sequence={[msg.text]} cursor={false} />
                  </div>
                </>
              ) : (
                <>
                  <div className="message">{msg.text}</div>
                  <img
                    className="w-[45px] h-[45px] ml-1"
                    src={user}
                    alt="user"
                  />
                </>
              )}
            </div>
          ))}
        </div>
        <Input input={input} setInput={setInput} sendQuestion={sendQuestion} />
      </div>
    </div>
  );
}

export default Chatbot;
