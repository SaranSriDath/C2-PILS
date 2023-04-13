import React from "react";
import { GiMegabot } from "react-icons/gi";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <GiMegabot size={75} />
      </div>
      <div className="header_home">
        Home
      </div>
      <div className="header_dashboard">
        Dashboard
      </div>
      <div className="header_about">
        About
      </div>
      <div className="header_contact">
        Contact
      </div>
    </div>
  );
};

export default Header;
