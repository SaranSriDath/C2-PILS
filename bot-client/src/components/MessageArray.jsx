import React from "react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const pstyle = {
  marginTop: "10px",
  marginBottom: "10px",
};
function Message({ msg, type, time }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className={`chatbox ${type === "bot" ? "botschat" : "userschat"}`}
    >
      <div className={`chatmsg ${type === "bot" ? "botschat" : "userschat"}`}>
        <p style={pstyle}>{msg}</p>
        <span
          className={`chattime ${type === "bot" ? "botschat" : "userschat"}`}
        >
          {time}
        </span>
      </div>
    </motion.div>
  );
}

const MessageArray = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="messagelist">
      {messages.length ? (
        messages.map((message, index) => <Message key={index} {...message} />)
      ) : (
        <div className="entiremessages">
          <p className=""><b>Shoot Your Question!</b></p>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageArray;
