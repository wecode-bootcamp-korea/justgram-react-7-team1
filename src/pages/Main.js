import React, { useRef, useState } from "react";
import "./Main.scss";
import instagram from "./image/instagram.png";
const Main = () => {
  //댓글 개수 관리 state
  const [commentArray, setCommentArray] = useState([]);

  //댓글을 상태관리
  const [id, setId] = useState(1);
  const value = useRef();

  //댓글을 추가하는 함수
  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      content: value.current.value,
    };

    setCommentArray([...commentArray, newComment]);
  };

  return (
    <div className="main">
      <header>
        <div id="headerMain">
          <div id="headerLeft">
            <div id="icon">
              <img src={instagram} alt="justgram 로고" />
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
            <div id="profile" className="logos"></div>
          </div>
        </div>
      </header>
      <main className="alignCenter">
        {/* <!-- feed 1번 --> */}
        <div className="feed">
          <div className="feedHeader">
            <div className="profileDiv alignCenter">
              <div className="user alignCenter">
                <img src="./image/cookie.jpg" alt="" className="profileImg" />
                <span className="userName">dawon_Oh</span>
              </div>
              <div className="feedHeaderMenu">
                <img
                  src="./image/option.png"
                  alt=""
                  className="feedHeaderMenuImg"
                />
              </div>
            </div>
          </div>
          <div className="feedImgDiv alignCenter">
            <img src="./image/sky.jpg" alt="하늘이미지" className="feedImg" />
          </div>
          <div className="feedMenu">
            <div id="feedLeft" className="alignCenter">
              <div id="feedHeart">
                <img
                  src="./image/heart.png"
                  alt="좋아요"
                  className="feedIcon"
                />
              </div>
              <div id="feedComment">
                <img
                  src="./image/speech-bubble.png"
                  alt="댓글보기"
                  className="feedIcon"
                />
              </div>
              <div id="feedSend">
                <img
                  src="./image/send.png"
                  alt="공유하기"
                  className="feedIcon"
                />
              </div>
            </div>

            <div id="feedRight" className="alignCenter">
              <div id="feedMark">
                <img
                  src="./image/bookmark-white.png"
                  alt="저장하기"
                  className="feedIcon"
                />
              </div>
            </div>
          </div>
          <div className="comment">
            <p className="countLikes commentP">좋아요 4개</p>
            <div className="commentList">
              <p className="commentP">
                <span className="writer">dawon_Oh</span>
                <span className="content">날씨 좋다🌞</span>
              </p>
              {commentArray.map((comment) => {
                return (
                  <p className="commentP" key={comment.id}>
                    <span className="writer">dawon_Oh</span>
                    <span className="tag">@friend_1</span>
                    <span className="content">{comment.content}</span>
                  </p>
                );
              })}
            </div>
            <div className="writeDate grayFont">2일 전</div>
          </div>
          <div className="addComment alignCenter">
            <div className="addCommentLogoAndInput alignCenter">
              <div className="smileIcon">
                <img src="./image/emoticon.png" alt="" className="smile" />
              </div>
              <div className="inputForm">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  className="commentInput"
                  ref={value}
                />
              </div>
            </div>
            <button className="addBtn" onClick={addComment}>
              게시
            </button>
          </div>
        </div>
        {/* <!-- feed 2번 --> */}
        <div className="feed">
          <div className="feedHeader">
            <div className="profileDiv alignCenter">
              <div className="user alignCenter">
                <img src="./image/cookie.jpg" alt="" className="profileImg" />
                <span className="userName">dawon_Oh</span>
              </div>
              <div className="feedHeaderMenu">
                <img
                  src="./image/option.png"
                  alt=""
                  className="feedHeaderMenuImg"
                />
              </div>
            </div>
          </div>
          <div className="feedImgDiv alignCenter">
            <img src="./image/cafe.jpg" alt="카페이미지" className="feedImg" />
          </div>
          <div className="feedMenu">
            <div id="feedLeft" className="alignCenter">
              <div id="feedHeart">
                <img
                  src="./image/heart.png"
                  alt="좋아요"
                  className="feedIcon"
                />
              </div>
              <div id="feedComment">
                <img
                  src="./image/speech-bubble.png"
                  alt="댓글보기"
                  className="feedIcon"
                />
              </div>
              <div id="feedSend">
                <img
                  src="./image/send.png"
                  alt="공유하기"
                  className="feedIcon"
                />
              </div>
            </div>

            <div id="feedRight" className="alignCenter">
              <div id="feedMark">
                <img
                  src="./image/bookmark-white.png"
                  alt="저장하기"
                  className="feedIcon"
                />
              </div>
            </div>
          </div>
          <div className="comment">
            <p className="countLikes commentP">좋아요 10개</p>
            <p className="commentP">
              <span className="writer">dawon_Oh</span>
              <span className="content">차가 맛있었던 카페</span>
            </p>
            <p className="commentP grayFont">댓글 3개 모두 보기</p>
            <div className="commentList">
              <p className="commentP">
                <span className="writer">dawon_Oh</span>
                <span className="tag">@friend_2</span>
                <span className="content">ㅋㅋㅋㅋㅋㅋㅋ🤣</span>
              </p>
            </div>
            <div className="writeDate grayFont">3일 전</div>
          </div>
          <div className="addComment alignCenter">
            <div className="addCommentLogoAndInput alignCenter">
              <div className="smileIcon">
                <img src="./image/emoticon.png" alt="" className="smile" />
              </div>
              <div className="inputForm">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  className="commentInput"
                />
              </div>
            </div>
            <button className="addBtn">게시</button>
          </div>
        </div>

        {/* <!-- feed 3번 --> */}
        <div className="feed">
          <div className="feedHeader">
            <div className="profileDiv alignCenter">
              <div className="user alignCenter">
                <img src="./image/cookie.jpg" alt="" className="profileImg" />
                <span className="userName">dawon_Oh</span>
              </div>
              <div className="feedHeaderMenu">
                <img
                  src="./image/option.png"
                  alt=""
                  className="feedHeaderMenuImg"
                />
              </div>
            </div>
          </div>
          <div className="feedImgDiv alignCenter">
            <img src="./image/cat.jpg" alt="고양이이미지" className="feedImg" />
          </div>
          <div className="feedMenu">
            <div id="feedLeft" className="alignCenter">
              <div id="feedHeart">
                <img
                  src="./image/heart.png"
                  alt="좋아요"
                  className="feedIcon"
                />
              </div>
              <div id="feedComment">
                <img
                  src="./image/speech-bubble.png"
                  alt="댓글보기"
                  className="feedIcon"
                />
              </div>
              <div id="feedSend">
                <img
                  src="./image/send.png"
                  alt="공유하기"
                  className="feedIcon"
                />
              </div>
            </div>

            <div id="feedRight" className="alignCenter">
              <div id="feedMark">
                <img
                  src="./image/bookmark-white.png"
                  alt="저장하기"
                  className="feedIcon"
                />
              </div>
            </div>
          </div>
          <div className="comment">
            <p className="countLikes commentP">좋아요 12개</p>
            <p className="commentP">
              <span className="writer">dawon_Oh</span>
              <span className="content">😺</span>
            </p>
            <p className="commentP grayFont">댓글 4개 모두 보기</p>
            <div className="commentList">
              <p className="commentP">
                <span className="writer">dawon_Oh</span>
                <span className="tag">@friend_3</span>
                <span className="content">😺😺😺</span>
              </p>
            </div>
            <div className="writeDate grayFont">4일 전</div>
          </div>
          <div className="addComment alignCenter">
            <div className="addCommentLogoAndInput alignCenter">
              <div className="smileIcon">
                <img src="./image/emoticon.png" alt="" className="smile" />
              </div>
              <div className="inputForm">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  className="commentInput"
                />
              </div>
            </div>
            <button className="addBtn">게시</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
