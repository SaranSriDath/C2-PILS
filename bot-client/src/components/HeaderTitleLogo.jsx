import React from "react";
import Logo from "./Logo"


const HeaderTitleLogo = () => {
  return (
    <div className = "logoheader">
      <div className="logohead">
        <Logo  />
      </div>
      <span className="title">C²-PILS</span>
    </div>
  );
};

export default HeaderTitleLogo;
