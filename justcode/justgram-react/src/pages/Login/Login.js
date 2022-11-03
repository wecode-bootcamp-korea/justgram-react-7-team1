import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const id = useRef();
  const pw = useRef();

  const [isValid, setIsValid] = useState(false);

  const goToMain = () => {
    navigate("/main");
  };

  const handleInput = () => {
    id.current.value.includes("@") && pw.current.value.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  return (
    <div className="logInContent">
      <p id="logo">Justgram</p>
      <div className="loginId">
        <input
          id="inputId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleInput}
          ref={id}
        />
      </div>
      <div className="loginPassword">
        <input
          id="inputPassword"
          type="password"
          placeholder="비밀번호"
          onChange={handleInput}
          ref={pw}
        />
      </div>
      <button
        disabled="disabled"
        className="btn"
        style={{ backgroundColor: isValid ? "#1c7ed6" : "#bfdffd" }}
      >
        로그인
      </button>
      <a className="forGetPassWord" href="#">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
};

export default Login;
