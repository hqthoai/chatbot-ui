import Header from "../Header/Header";
import chatbot from "../../assets/logo.png";
import user from "../../assets/user.png";

import "./chatbot.css";

function Chatbot() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div
        className="relative flex flex-col  md:w-2/3 w-full bg-[#313535]"
        style={{ height: "calc(100vh - 80px)" }}>
        <div className="chat-output flex flex-col p-5 overflow-y-auto">
          <div className="bot-message">
            <img className="w-[45px] h-[45px] mr-1" src={chatbot} alt="bot" />
            <div className="message">
              Hi! I'm a bot. How can I help you today? Hi! I'm a bot. How can I
              help you today? Hi! I'm a bot. How can I help you today?
            </div>
          </div>
          <div className="user-message">
            <div className="message">Hi!</div>
            <img className="w-[45px] h-[45px] ml-1" src={user} alt="bot" />
          </div>
        </div>

        <div className="absolute bottom-0 chat-input p-5 w-full ">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-3xl border-0 py-3 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Talk to Assistant"
            />
            <div className="absolute inset-y-0 right-1 flex items-center justify-center">
              <button
                className="rounded-[50%] bg-indigo-600 w-10 h-10 flex items-center justify-center"
                type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
