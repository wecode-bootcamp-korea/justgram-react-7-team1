import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleIdInput = (e) => {
    setIdValue(e.target.value);
    idValue.includes("@") && pwValue.length > 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handlePwInput = (e) => {
    setPwValue(e.target.value);
    idValue.includes("@") && pwValue.length > 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  console.log(isValid);

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
            onChange={handleIdInput}
          />
          <input
            type="password"
            className="inputArea"
            id="pwInput"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <button
            id="loginBtn"
            style={{ backgroudColor: isValid ? "black" : "yellow" }}
          >
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
