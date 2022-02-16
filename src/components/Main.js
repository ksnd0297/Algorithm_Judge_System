import React from "react";
import "../scss/Main.scss";

import Content from "./Main/Content";
import LeftSide from "./Main/LeftSide";

function Main({ children }) {
  return (
    <div className="Main">
      <LeftSide />
      <Content />
    </div>
  );
}

export default React.memo(Main);
