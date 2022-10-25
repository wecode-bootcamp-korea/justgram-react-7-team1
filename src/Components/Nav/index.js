import React, { useState, useEffect } from "react";

export function Nav() {
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

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
    <nav>
      <div className="nav-content">
        <div className="nav-left">
          <img
            className="icon-insta"
            alt="insta-icon"
            src="/images/instagram.png"
          />
          <span>justgram</span>
        </div>

        <div className="nav-center">
          <input type="text" id="search" placeholder="검색" />
        </div>

        <div className="nav-right">
          <div>
            <img
              className="icon-explore"
              alt="explore-icon"
              src="/images/explore.png"
            />
          </div>
          <div>
            <img
              className="icon-heart"
              alt="heart-icon"
              src="/images/heart.png"
            />
          </div>
          <div>
            {userEmail ? (
              <span>{userEmail}</span>
            ) : (
              <img
                className="icon-profile"
                alt="profile-icon"
                src="/images/profile.png"
              /> //삼항연산자 이용 조건부 렌더링
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
