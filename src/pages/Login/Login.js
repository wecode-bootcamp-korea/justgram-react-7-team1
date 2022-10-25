import React, { useEffect, useRef, useState } from "react";
import "./Login.scss";

const Login = () => {
  const id = useRef();
  const pw = useRef();

  // const [isValid, setIsValid] = useState(false);

  // const handleInput = () => {
  //   id.current.value.includes("@") && pw.current.value.length >= 5
  //     ? setIsValid(true)
  //     : setIsValid(false);
  // };

  const handleLogin = () => {
    fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: id.current.value,
        password: pw.current.value,
      }),
    })
      .then((response) => response.json())
      .then((result) => localStorage.setItem("token", result.token));
  };

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
            ref={id}
          />
          <input
            type="password"
            className="inputArea"
            id="pwInput"
            placeholder="비밀번호"
            ref={pw}
          />
          <button onClick={handleLogin} id="loginBtn">
            <span>로그인</span>
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
