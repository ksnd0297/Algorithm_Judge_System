import react, { useCallback, useState } from "react";
import "../../scss/Header/Info.scss";

function Info() {
  const name = "김동환";

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useCallback(
    setInterval(() => {
      const date = new Date();
      setHour(date.getHours().toString().padStart(2, "0"));
      setMinute(date.getMinutes().toString().padStart(2, "0"));
      setSecond(date.getSeconds().toString().padStart(2, "0"));
    }, 1),
    []
  );

  return (
    <div className="Info">
      <div className="name">{name}님</div>
      <div>환영합니다!</div>
      <div className="date">
        {hour} : {minute} : {second}
      </div>
    </div>
  );
}

export default Info;
