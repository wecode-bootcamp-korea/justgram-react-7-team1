import React from "react";
import "./Login.scss";

const Login = () => {
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
            <button disabled onclick="location.href='login.html'" id="loginbtn">
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
          <a
            className="instaFindPass"
            href="https://www.instagram.com/accounts/password/reset/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </div>
    </>
  );
};

export default Login;
