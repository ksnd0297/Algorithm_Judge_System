import React, { useState, useCallback } from "react";

import "../../scss/Content/Judge.scss";

function Judge() {
  const [file, setFile] = useState();

  const [problemNum, setProblemNum] = useState(0);
  const [problemName, setProblemName] = useState("dish");

  const onChangeFile = useCallback(
    (e) => {
      setFile(e.target.files[0]);
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

  const problem = [
    { id: 0, name: "dish" },
    { id: 1, name: "block" },
    { id: 2, name: "condition" },
  ];

  return (
    <div className="JudgeContainer">
      <div className="Judge">
        <p className="header">
          <select className="problem" onChange={onChangeProblem}>
            {problem.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </p>
        <p className="footer">
          <input
            className="file"
            type="file"
            id="file"
            accept=".cpp"
            onChange={onChangeFile}
          />
        </p>
        <div className="button">submit</div>
      </div>
    </div>
  );
}

export default Judge;
