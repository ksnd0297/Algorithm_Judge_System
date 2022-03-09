import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../scss/Main/LeftSide.scss";

import cn from "classnames";

const link = [
  {
    name: "문제",
    to: "/problems",
  },
  {
    name: "채점",
    to: "/judge",
  },
  {
    name: "알고리즘 설명",
    to: "/algorithm",
  },
  {
    name: "개인 점수",
    to: "/score",
  },
  {
    name: "홈",
    to: "/main",
  },
];

function LeftSide() {
  const [page, setPage] = useState(useLocation().pathname || "/main");

  return (
    <div className="LeftSide">
      {link.map((L, index) => (
        <Link
          key={index}
          to={L.to}
          className={cn("Link", { active: page === L.to })}
          onClick={() => setPage(L.to)}
        >
          <span>{L.name}</span>
          {page === L.to && <span className="Arrow" />}
        </Link>
      ))}
    </div>
  );
}

export default React.memo(LeftSide);
