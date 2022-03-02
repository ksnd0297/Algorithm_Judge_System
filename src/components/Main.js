import React from "react";
import "../scss/Main.scss";

import LeftSide from "./Main/LeftSide";
import Content from "./Main/Content";

function Main(props) {
  return (
    <div className="Main">
      <LeftSide />
      <Content>{props.children}</Content>
    </div>
  );
}

export default React.memo(Main);
