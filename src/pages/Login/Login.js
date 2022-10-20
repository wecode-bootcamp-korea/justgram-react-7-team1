import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate;

  const goMain = () => {
    navigate("/main");
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
            />
          </div>
          <div className="loginbox">
            <input id="pw_box" type="password" placeholder="  비밀번호" />
          </div>
          <p>
            <button onClick={goMain} id="loginbtn">
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
