import React from "react";
import "./Main.scss";

function Main() {
  return (
    <>
      <header>
        <div className="header header_left">
          <img
            alt="인스타"
            src="/assets/images/img/instagram.png"
            width="20px"
            height="20px"
          />
          <div className="vertical"></div>
          <div className="JustGram_naming">
            <p>JustGram</p>
          </div>
        </div>
        <div className="header header_center">
          <div className="txt_box">
            <input type="text" placeholder="검색" />
            <img
              alt="서치"
              src="/assets/images/img/search.png"
              width="12px"
              height="12px"
            />
          </div>
        </div>
        <div className="header header_right">
          <img
            alt="1"
            className="menu_icon_image"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            alt="2"
            className="menu_icon_image"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            alt="3"
            className="menu_icon_image"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </header>

      <section>
        <div className="main_content">
          <div className="content">
            <div className="feed_header">
              <div className="profile_picture"></div>
              <div className="user_id">JeongDongHyeon</div>
            </div>
            <div className="feed_picture"></div>
            <div className="menu_bar">
              <div className="menu_bar_icon">
                <img alt="" width="30px" height="30px" />
                <img
                  alt="코멘트"
                  src="/assets/images/img/comment.png"
                  width="50px"
                  height="50px"
                />
                <img
                  alt="업로드"
                  src="/assets/images/img/heart.png"
                  width="30px"
                  height="30px"
                />
                <div className="menu_bar_right">
                  <img
                    alt="북마크"
                    src="/assets/images/img/bookmark-white.png"
                    width="30px"
                    height="30px"
                  />
                </div>
              </div>
              <div className="like_content">
                <div className="like_profile"></div>
                <div className="like_check">
                  JustCode님 외 10명이 좋아합니다.
                </div>
              </div>
              <div className="main_comment_box">
                <div className="comment-box1"></div>
              </div>
              <div className="function_tab">
                <div className="ago_time">n분 전</div>
                <div className="like_heart_btn">
                  <img
                    alt=""
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    width="15px"
                    height="15px"
                  />
                </div>
              </div>

              <div className="comment_append_box">
                <input
                  className="comment_content"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="comment_append" type="submit">
                  게시
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
