import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import KakaoLogin from "react-kakao-login";

import "../scss/Login.scss";
import axios from "axios";

// axios 를 통해 사용자 여부 확인
const token = async () => {
  // 1 : 회원
  await axios.get("");
};

const Login = ({ appSetToken }) => {
  const navigate = useNavigate();
  return (
    <div className="LoginContainer">
      <div className="Login">
        <div className="Logo">
          DONG-A
          <br /> ONLINE JUDGE
        </div>
        <KakaoLogin
          token="4ae0a1ae52b7f23c485169b6a0c37528"
          onSuccess={(response) => {
            appSetToken(response.response.access_token);
            token === 1 ? navigate("/register") : navigate("/main");
          }}
          onFail={console.error}
          onLogout={console.info}
          className="KakaoLogin"
          style={{ all: "none" }}
        />
      </div>
    </div>
  );
};

export default Login;
