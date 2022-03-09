import React, { useState, useCallback } from "react";

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

  const onclick = () => {};

  return (
    <div className="JudgeContainer">
      <div className="Judge">
        <select name="problem" onChange={onChangeProblem}>
          {problem.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <input type="file" id="file" onChange={onChangeFile}></input>
        <input type="button" value="제출"></input>
      </div>
    </div>
  );
}

export default Judge;
