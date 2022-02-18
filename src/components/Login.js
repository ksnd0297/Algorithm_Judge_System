import React, { useState } from "react";
import KakaoLogin from "react-kakao-login";

import "../scss/Login.scss";

function Login() {
  const [token, setToken] = useState();
  return (
    <div className="container">
      <div className="Login">
        <KakaoLogin
          token="4ae0a1ae52b7f23c485169b6a0c37528"
          onSuccess={(response) => {
            setToken(response.response.access_token);
          }}
          onFail={console.error}
          onLogout={console.info}
        />
      </div>
    </div>
  );
}

export default Login;
