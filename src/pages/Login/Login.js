import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function Login() {
  const id = useRef();
  const pw = useRef();
  const [isValid, setisValid] = useState();

  const handleInput = (e) => {
    id.current.value.includes("@") && pw.current.value.length > 5
      ? setisValid(true)
      : setisValid(false);
  };

  return (
    <>
      <div className="container">
        <div className="logo">
          <p>JustGram</p>
        </div>

        <div className="secter">
          <div className="loginbox">
            <input
              id="id_box"
              type="text"
              placeholder="  전화번호,사용자 이름 또는 이메일"
              onChange={handleInput}
              ref={id}
            />
          </div>
          <div className="loginbox">
            <input
              id="pw_box"
              type="password"
              placeholder="  비밀번호"
              onChange={handleInput}
              ref={pw}
            />
          </div>
          <p>
            <button
              style={{ backgroundColor: isValid ? "#4ec5f4" : "#cde9f4" }}
              id="loginbtn"
            >
              로그인
            </button>
          </p>
        </div>
        <hr className="HRline" />

        <div>
          <img alt="" src="img/ico/facebook.ico" />
          <a className="facebookLogin" href="https://www.facebook.com/">
            Facebook으로 로그인
          </a>
        </div>
        <footer>
          <Link to="/main" className="instaFindPass">
            비밀번호를 잊으셨나요 ?
          </Link>
        </footer>
      </div>
    </>
  );
}

export default Login;
