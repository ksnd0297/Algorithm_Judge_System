import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/Main/LeftSide.scss";

function LeftSide() {
  const [page, setPage] = useState(5);

  return (
    <div className="LeftSide">
      <Link to="/problems" className="Link" onClick={() => setPage(1)}>
        문제{page === 1 && <span className="Arrow" />}
      </Link>
      <Link to="/judge" className="Link" onClick={() => setPage(2)}>
        채점{page === 2 && <span className="Arrow" />}
      </Link>
      <Link to="/algorithm" className="Link" onClick={() => setPage(3)}>
        알고리즘 설명{page === 3 && <span className="Arrow" />}
      </Link>

      <Link to="/score" className="Link" onClick={() => setPage(4)}>
        개인 점수{page === 4 && <span className="Arrow" />}
      </Link>

      <Link to="/main" className="Link" onClick={() => setPage(5)}>
        홈{page === 5 && <span className="Arrow" />}
      </Link>
    </div>
  );
}

export default LeftSide;
