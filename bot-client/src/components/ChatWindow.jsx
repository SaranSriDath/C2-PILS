import React from 'react'
import MessageArray from "./MessageArray";
import Input from "./Input";
import { useState } from "react";

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
  return (
    
    <div className="chatwindow">
        <MessageArray messages={messages} />
        
        <Input setMessages={setMessages} />
    </div>
  )
}

export default ChatWindow