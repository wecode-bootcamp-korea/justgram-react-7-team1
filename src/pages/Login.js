import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div id="flexContainer" className="center">
      <div id="loginMain" className="center">
        <h1 id="title">justgram</h1>
        <form action="#" className="inputForm center">
          <input
            type="text"
            className="inputArea"
            id="idInput"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            type="password"
            className="inputArea"
            id="pwInput"
            placeholder="비밀번호"
          />
          <button disabled="disabled" id="loginBtn">
            로그인
          </button>
        </form>
        <a href="#" id="lostPw">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
