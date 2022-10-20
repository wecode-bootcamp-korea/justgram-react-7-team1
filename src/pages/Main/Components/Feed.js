import React, { useState, useRef } from "react";
import Comment from "./Comment";

const Feed = () => {
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
    <div className="feed">
      <div className="feedHeader">
        <div className="profileDiv alignCenter">
          <div className="user alignCenter">
            <img src="../../image/cookie.jpg" alt="" className="profileImg" />
            <span className="userName">dawon_Oh</span>
          </div>
          <div className="feedHeaderMenu">
            <img
              src="../../image/option.png"
              alt=""
              className="feedHeaderMenuImg"
            />
          </div>
        </div>
      </div>
      <div className="feedImgDiv alignCenter">
        <img src="../../image/sky.jpg" alt="하늘이미지" className="feedImg" />
      </div>
      <div className="feedMenu">
        <div id="feedLeft" className="alignCenter">
          <div id="feedHeart">
            <img
              src="../../image/heart.png"
              alt="좋아요"
              className="feedIcon"
            />
          </div>
          <div id="feedComment">
            <img
              src="../../image/speech-bubble.png"
              alt="댓글보기"
              className="feedIcon"
            />
          </div>
          <div id="feedSend">
            <img
              src="../../image/send.png"
              alt="공유하기"
              className="feedIcon"
            />
          </div>
        </div>

        <div id="feedRight" className="alignCenter">
          <div id="feedMark">
            <img
              src="../../image/bookmark-white.png"
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
            return <Comment content={comment.content} key={comment.id} />;
          })}
        </div>
        <div className="writeDate grayFont">2일 전</div>
      </div>
      <div className="addComment alignCenter">
        <div className="addCommentLogoAndInput alignCenter">
          <div className="smileIcon">
            <img src="../../image/emoticon.png" alt="" className="smile" />
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
  );
};

export default Feed;
