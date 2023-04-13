import React from "react";
import axios from "axios";
import { formatRelative } from "date-fns";
import { useState } from "react";
import SendButtonLogo from "./SendButtonLogo";
//import loadingIcon from "../assets/loader.svg";

const Input = ({ setMessages }) => {
  const [message, setMessage] = useState("");

  const messageResponse = async () => {
    const { data } = await axios.post("http://localhost:4000/message", {
      message,
    });

    setMessages((prev) => [
      ...prev,
      {
        msg: data.message,
        type: "bot",
        time: formatRelative(new Date(), new Date()),
      },
    ]);
  };

  const querySubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    setMessages((prev) => [
      ...prev,
      {
        msg: message,
        type: "user",
        time: formatRelative(new Date(), new Date()),
      },
    ]);
    setMessage("");

    await messageResponse();
  };

  return (
    <form className="chatform">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        className="messagebox"
      />
      <button type="submit" onClick={querySubmit} className="sendbutton">
        <SendButtonLogo />
      </button>
    </form>
  );
};

export default Input;