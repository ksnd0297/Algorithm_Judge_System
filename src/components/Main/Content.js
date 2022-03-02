import React from "react";
import "../../scss/Main/Content.scss";

function Content(props) {
  return <div className="Content">{props.children}</div>;
}

export default Content;
