import React from "react";

import ChatWindow from "./ChatWindow";
import HeaderTitleLogo from "./HeaderTitleLogo";

const Chat = () => {
  return (
    <div>
      <HeaderTitleLogo />
      <div className="divider"></div>

      <ChatWindow />
    </div>
  );
};

export default Chat;
