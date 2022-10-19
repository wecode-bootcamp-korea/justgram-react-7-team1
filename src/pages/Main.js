import React from "react";
import "./Main.scss";
import instagram from "./image/instagram.png";
const Main = () => {
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
            <div id="explore" class="logos"></div>
            <div id="heart" class="logos"></div>
            <div id="profile" class="logos"></div>
          </div>
        </div>
      </header>
      <main class="alignCenter">
        {/* <!-- feed 1번 --> */}
        <div class="feed">
          <div class="feedHeader">
            <div class="profileDiv alignCenter">
              <div class="user alignCenter">
                <img src="./image/cookie.jpg" alt="" class="profileImg" />
                <span class="userName">dawon_Oh</span>
              </div>
              <div class="feedHeaderMenu">
                <img
                  src="./image/option.png"
                  alt=""
                  class="feedHeaderMenuImg"
                />
              </div>
            </div>
          </div>
          <div class="feedImgDiv alignCenter">
            <img src="./image/sky.jpg" alt="하늘이미지" class="feedImg" />
          </div>
          <div class="feedMenu">
            <div id="feedLeft" class="alignCenter">
              <div id="feedHeart">
                <img src="./image/heart.png" alt="좋아요" class="feedIcon" />
              </div>
              <div id="feedComment">
                <img
                  src="./image/speech-bubble.png"
                  alt="댓글보기"
                  class="feedIcon"
                />
              </div>
              <div id="feedSend">
                <img src="./image/send.png" alt="공유하기" class="feedIcon" />
              </div>
            </div>

            <div id="feedRight" class="alignCenter">
              <div id="feedMark">
                <img
                  src="./image/bookmark-white.png"
                  alt="저장하기"
                  class="feedIcon"
                />
              </div>
            </div>
          </div>
          <div class="comment">
            <p class="countLikes commentP">좋아요 4개</p>
            <p class="commentP">
              <span class="writer">dawon_Oh</span>
              <span class="content">날씨 좋다🌞</span>
            </p>
            <p class="commentP grayFont">댓글 2개 모두 보기</p>
            <div class="commentList">
              <p class="commentP">
                <span class="writer">dawon_Oh</span>
                <span class="tag">@friend_1</span>
                <span class="content">날씨가 좋네요 요즘!</span>
              </p>
            </div>
            <div class="writeDate grayFont">2일 전</div>
          </div>
          <div class="addComment alignCenter">
            <div class="addCommentLogoAndInput alignCenter">
              <div class="smileIcon">
                <img src="./image/emoticon.png" alt="" class="smile" />
              </div>
              <div class="inputForm">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  class="commentInput"
                />
              </div>
            </div>
            <button class="addBtn">게시</button>
          </div>
        </div>
        {/* <!-- feed 2번 --> */}
        <div class="feed">
          <div class="feedHeader">
            <div class="profileDiv alignCenter">
              <div class="user alignCenter">
                <img src="./image/cookie.jpg" alt="" class="profileImg" />
                <span class="userName">dawon_Oh</span>
              </div>
              <div class="feedHeaderMenu">
                <img
                  src="./image/option.png"
                  alt=""
                  class="feedHeaderMenuImg"
                />
              </div>
            </div>
          </div>
          <div class="feedImgDiv alignCenter">
            <img src="./image/cafe.jpg" alt="카페이미지" class="feedImg" />
          </div>
          <div class="feedMenu">
            <div id="feedLeft" class="alignCenter">
              <div id="feedHeart">
                <img src="./image/heart.png" alt="좋아요" class="feedIcon" />
              </div>
              <div id="feedComment">
                <img
                  src="./image/speech-bubble.png"
                  alt="댓글보기"
                  class="feedIcon"
                />
              </div>
              <div id="feedSend">
                <img src="./image/send.png" alt="공유하기" class="feedIcon" />
              </div>
            </div>

            <div id="feedRight" class="alignCenter">
              <div id="feedMark">
                <img
                  src="./image/bookmark-white.png"
                  alt="저장하기"
                  class="feedIcon"
                />
              </div>
            </div>
          </div>
          <div class="comment">
            <p class="countLikes commentP">좋아요 10개</p>
            <p class="commentP">
              <span class="writer">dawon_Oh</span>
              <span class="content">차가 맛있었던 카페</span>
            </p>
            <p class="commentP grayFont">댓글 3개 모두 보기</p>
            <div class="commentList">
              <p class="commentP">
                <span class="writer">dawon_Oh</span>
                <span class="tag">@friend_2</span>
                <span class="content">ㅋㅋㅋㅋㅋㅋㅋ🤣</span>
              </p>
            </div>
            <div class="writeDate grayFont">3일 전</div>
          </div>
          <div class="addComment alignCenter">
            <div class="addCommentLogoAndInput alignCenter">
              <div class="smileIcon">
                <img src="./image/emoticon.png" alt="" class="smile" />
              </div>
              <div class="inputForm">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  class="commentInput"
                />
              </div>
            </div>
            <button class="addBtn">게시</button>
          </div>
        </div>

        {/* <!-- feed 3번 --> */}
        <div class="feed">
          <div class="feedHeader">
            <div class="profileDiv alignCenter">
              <div class="user alignCenter">
                <img src="./image/cookie.jpg" alt="" class="profileImg" />
                <span class="userName">dawon_Oh</span>
              </div>
              <div class="feedHeaderMenu">
                <img
                  src="./image/option.png"
                  alt=""
                  class="feedHeaderMenuImg"
                />
              </div>
            </div>
          </div>
          <div class="feedImgDiv alignCenter">
            <img src="./image/cat.jpg" alt="고양이이미지" class="feedImg" />
          </div>
          <div class="feedMenu">
            <div id="feedLeft" class="alignCenter">
              <div id="feedHeart">
                <img src="./image/heart.png" alt="좋아요" class="feedIcon" />
              </div>
              <div id="feedComment">
                <img
                  src="./image/speech-bubble.png"
                  alt="댓글보기"
                  class="feedIcon"
                />
              </div>
              <div id="feedSend">
                <img src="./image/send.png" alt="공유하기" class="feedIcon" />
              </div>
            </div>

            <div id="feedRight" class="alignCenter">
              <div id="feedMark">
                <img
                  src="./image/bookmark-white.png"
                  alt="저장하기"
                  class="feedIcon"
                />
              </div>
            </div>
          </div>
          <div class="comment">
            <p class="countLikes commentP">좋아요 12개</p>
            <p class="commentP">
              <span class="writer">dawon_Oh</span>
              <span class="content">😺</span>
            </p>
            <p class="commentP grayFont">댓글 4개 모두 보기</p>
            <div class="commentList">
              <p class="commentP">
                <span class="writer">dawon_Oh</span>
                <span class="tag">@friend_3</span>
                <span class="content">😺😺😺</span>
              </p>
            </div>
            <div class="writeDate grayFont">4일 전</div>
          </div>
          <div class="addComment alignCenter">
            <div class="addCommentLogoAndInput alignCenter">
              <div class="smileIcon">
                <img src="./image/emoticon.png" alt="" class="smile" />
              </div>
              <div class="inputForm">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  class="commentInput"
                />
              </div>
            </div>
            <button class="addBtn">게시</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
