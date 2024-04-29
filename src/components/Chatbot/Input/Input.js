function Input(props) {
  const { input, setInput, sendQuestion, isResponse } = props;
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendQuestion(); // Call the sendQuestion function
    }
  };
  return (
    <div className="absolute bottom-0 chat-input p-5 w-full bg-[#dadaf3] h-24">
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="question"
          id="question"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          value={input}
          className="block w-full rounded-3xl border-0 py-3 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-base sm:leading-6"
          placeholder="Talk to Assistant"
        />
        <div className="absolute inset-y-0 right-1 flex items-center justify-center">
          <button
            disabled={isResponse || input === ""}
            className={`rounded-[50%] bg-indigo-600 w-10 h-10 flex items-center justify-center ${
              isResponse || input === ""
                ? "opacity-60 cursor-default"
                : "opacity-100"
            }`}
            onClick={sendQuestion}>
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
  );
}

export default Input;
