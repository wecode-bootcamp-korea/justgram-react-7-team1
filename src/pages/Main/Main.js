import React, { useEffect, useState } from "react";
import Feed from "./Components/Feed";
import "./Main.scss";

const Main = () => {
  const [feedArray, setFeedArray] = useState([]);
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    fetch("/data/FeedData.json")
      .then((res) => res.json())
      .then((res) => setFeedArray(res.data));
  }, []);

  useEffect(() => {
    //1. 토큰 가져오기
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      alert("유저가 아닙니다!");
      return;
    }
    fetch("http://localhost:8000/users/me", {
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((response) => response.json())
      .then((result) => setUserEmail(result.email));
  }, []);

  return (
    <div className="main">
      <header>
        <div id="headerMain">
          <div id="headerLeft">
            <div id="icon">
              <img src="../../image/instagram.png" alt="justgram 로고" />
            </div>
            <span id="pipe">|</span>
            <span id="logoName">justgram</span>
          </div>
          <div id="headerSearch">
            <input type="text" placeholder="검색" id="searchInput" />
          </div>
          <div id="headerRight">
            <div id="explore" className="logos"></div>
            <div id="heart" className="logos"></div>
            {userEmail ? (
              <span>{userEmail}</span>
            ) : (
              <div id="profile" className="logos"></div>
            )}
          </div>
        </div>
      </header>
      <main className="alignCenter">
        {feedArray.map((feed) => (
          <Feed
            key={feed.id}
            likeCount={feed.likeCount}
            userName={feed.userName}
            content={feed.content}
            feedImage={feed.feedImage}
          />
        ))}
      </main>
    </div>
  );
};

export default Main;
