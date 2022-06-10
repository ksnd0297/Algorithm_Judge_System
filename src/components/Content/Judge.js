import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "../../scss/Content/Judge.scss";

function Judge() {
  const navigate = useNavigate();

  const [file, setFile] = useState();

  const [problemNum, setProblemNum] = useState(0);
  const [problemName, setProblemName] = useState("dish");

  const onChangeFile = useCallback(
    (e) => {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      setFile(formData);
    },
    [file]
  );

  const onChangeProblem = useCallback(
    (e) => {
      setProblemNum(e.target.value);
      setProblemName(problem[e.target.value].name);
    },
    [problemNum]
  );

  const onClick = () => {
    console.log(file);
    // axios를 통한 파일 전송
    navigate("/main");
  };

  const problem = [
    { id: 0, name: "dish" },
    { id: 1, name: "block" },
    { id: 2, name: "condition" },
  ];

  return (
    <div className="JudgeContainer">
      <div className="Judge">
        <div className="title">
          <div className="emoji">🔴🟠🟢</div>
        </div>
        <div className="header">
          <select className="problem" onChange={onChangeProblem}>
            {problem.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="footer">
          <input
            className="file"
            type="file"
            id="file"
            accept=".cpp"
            onChange={onChangeFile}
          />
        </div>
        <div className="button" onClick={onClick}>
          submit
        </div>
      </div>
    </div>
  );
}

export default Judge;
