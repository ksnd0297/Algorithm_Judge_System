import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Register from "./components/Register";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Routes>
      <Route
        path="/register"
        element={
          <>
            <Register />
          </>
        }
      />
      <Route
        path="/main"
        element={
          <>
            <Header />
            <Main />
          </>
        }
      />
    </Routes>
  );
}

export default App;