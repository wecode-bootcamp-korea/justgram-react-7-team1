import React, { useRef, useState } from "react";
import Feed from "./Feed";
import "./Main.scss";

const Main = () => {
  const [commentArray, setCommentArray] = useState([]);
  const [id, setId] = useState(1);
  const value = useRef();

  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      content: value.current.value,
    };
    setCommentArray([...commentArray, newComment]);
  };
  return (
    <div className="container">
      <header className="navBar">
        <div className="topUi">
          <div className="topUi-left">
            <img src="/images/instagram.png" className="instaImg" />
            <span className="just">Justgram</span>
          </div>
          <div className="searchBar">
            <img className="searchImg" src="/images/search.png" />
            <input className="search" type="text" placeholder="검색" />
          </div>
          <div className="topUi-right">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              className="exImg"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              className="heartImg"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              className="profileIng"
            />
          </div>
        </div>
      </header>
      <Feed />
    </div>
  );
};

export default Main;
