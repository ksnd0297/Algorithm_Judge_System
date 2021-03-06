import React from "react";
import "../scss/Header.scss";

import Info from "./Header/Info";
import Logo from "./Header/Logo";

function Header() {
  return (
    <div className="Header">
      <Info />
      <Logo />
    </div>
  );
}

export default React.memo(Header);
