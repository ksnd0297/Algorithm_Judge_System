import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import KakaoLogin from "react-kakao-login";

import "../scss/Login.scss";

const Login = () => {
  const [token, setToken] = useState();
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="Login">
        <KakaoLogin
          token="4ae0a1ae52b7f23c485169b6a0c37528"
          onSuccess={(response) => {
            setToken(token);
            navigate("/register");
          }}
          onFail={console.error}
          onLogout={console.info}
        />
      </div>
    </div>
  );
};

export default Login;
