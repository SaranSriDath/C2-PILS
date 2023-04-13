import React from "react";
import Chat from "./Chat";
import MinimizeLogo from "./MinimizeLogo";
import MaximizeLogo from "./MaximizeLogo";
import Home from "./Home";
import { useState } from "react";

const ChatBot = () => {
  const [isminimized, setMinimized] = useState(false);
  const minimize = () => {
    setMinimized(!isminimized);
  };
  return (
    <div className = "mainbody">
      <Home/>
    <div className={isminimized ? "minimized" : "notminimized"}>
      <button onClick={minimize} className={isminimized ?  "min": "minmax"}>
        {isminimized ? <MaximizeLogo /> : <MinimizeLogo />}
      </button>
      <div className={isminimized ? "minimized2" : "notminimized2"}>
      <Chat />
      </div>
    </div>
    </div>
  );
};

export default ChatBot;
