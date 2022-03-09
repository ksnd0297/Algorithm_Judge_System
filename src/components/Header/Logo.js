import react from "react";
import "../../scss/Header/Logo.scss";

function Logo() {
  return (
    <div className="LogoContainer">
      <div className="LogoImage"></div>
      <div className="Logo">
        DONG-A <br />
        ONLINE JUDGE
      </div>
    </div>
  );
}

export default react.memo(Logo);
