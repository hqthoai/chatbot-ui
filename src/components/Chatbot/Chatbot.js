import Header from "../Header/Header";

function Chatbot() {
  return (
    <div>
      <Header />
      <div class="chat-output" id="chat-output">
        <div class="bot-message">
          <img
            class="Stephanie"
            src="https://www.pngfind.com/pngs/m/123-1234348_twittericon-twitter-round-logo-png-transparent-background-png.png"
            alt="Stephanie"
            width="45"
            height="45"
          />
          <div class="message">
            Hi! I'm Stephanie and I'm a bot. How can I help you today?
          </div>
        </div>
      </div>

      <div class="chat-input">
        <form action="#0" id="user-input-form">
          <textarea
            id="user-input"
            class="user-input"
            placeholder="Talk to the bot."></textarea>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
