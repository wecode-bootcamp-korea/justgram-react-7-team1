import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navi = useNavigate;

  const goMain = () => {
    navi("/main");
  };

  const [id, setid] = useState("");
  const [pw, setpw] = useState("");
  const [isValid, setisValid] = useState();

  const idSetting = (e) => {
    setid(e.target.value);
    id.includes("@") && pw.length > 5 ? setisValid(true) : setisValid(false);
  };

  const pwSetting = (e) => {
    setpw(e.target.value);
    console.log(pw);
    id.includes("@") && pw.length > 5 ? setisValid(true) : setisValid(false);
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
              onChange={idSetting}
              value={id}
            />
          </div>
          <div className="loginbox">
            <input
              id="pw_box"
              type="password"
              placeholder="  비밀번호"
              onChange={pwSetting}
              value={pw}
            />
          </div>
          <p>
            <button
              style={{ backgroundColor: isValid ? "#4ec5f4" : "#cde9f4" }}
              onClick={goMain}
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
