import React from "react";

import "../../scss/Content/Problems.scss";

//axios 받을 값
const problem = [
  {
    num: 1,
    name: "dish",
    file: "파일",
    bullet: 15,
    startTime: "2022-03-04 12:00",
    endTime: "2022-03-04 12:00",
  },
  {
    num: 2,
    name: "grid1",
    file: "파일",
    bullet: 15,
    startTime: "2022-03-04 12:00",
    endTime: "2022-03-04 12:00",
  },
  {
    num: 3,
    name: "good matrix",
    file: "파일",
    bullet: 15,
    startTime: "2022-03-04 12:00",
    endTime: "2022-03-04 12:00",
  },
  {
    num: 4,
    name: "good matrix",
    file: "파일",
    bullet: 15,
    startTime: "2022-03-04 12:00",
    endTime: "2022-03-04 12:00",
  },
  {
    num: 5,
    name: "good matrix",
    file: "파일",
    bullet: 15,
    startTime: "2022-03-04 12:00",
    endTime: "2022-03-04 12:00",
  },
];

function Problems() {
  return (
    <div className="ProblemsContainer">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col-1">문제 번호</div>
          <div className="col-2">문제 이름</div>
          <div className="col-3">파일</div>
          <div className="col-4">횟수 제한</div>
          <div className="col-5">시작 시간</div>
          <div className="col-6">마감 기한</div>
        </li>

        {problem.map((L, index) => (
          <li className="table-row" key={index}>
            <div className="col-1">{L.num}</div>
            <div className="col-2">{L.name}</div>
            <div className="col-3">{L.file}</div>
            <div className="col-4">{L.bullet}</div>
            <div className="col-5">{L.startTime}</div>
            <div className="col-6">{L.endTime}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Problems;
