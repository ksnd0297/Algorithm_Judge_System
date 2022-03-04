import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";

import Login from "./components/Login";
import Register from "./components/Register";

import Header from "./components/Header";
import Main from "./components/Main";

import Algorithm from "./components/Content/Algorithm";
import Judge from "./components/Content/Judge";
import Problems from "./components/Content/Problems";
import Score from "./components/Content/Score";
import Home from "./components/Content/Home";

function App() {
  const [appToken, appSetToken] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Login appSetToken={appSetToken} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/problems"
        element={
          <>
            <Header />
            <Main>
              <Problems />
            </Main>
          </>
        }
      />
      <Route
        path="/judge"
        element={
          <>
            <Header />
            <Main>
              <Judge />
            </Main>
          </>
        }
      />
      <Route
        path="/algorithm"
        element={
          <>
            <Header />
            <Main>
              <Algorithm />
            </Main>
          </>
        }
      />
      <Route
        path="/score"
        element={
          <>
            <Header />
            <Main>
              <Score />
            </Main>
          </>
        }
      />
      <Route
        path="/main"
        element={
          <>
            <Header />
            <Main>
              <Home />
            </Main>
          </>
        }
      />
    </Routes>
  );
}

export default App;
