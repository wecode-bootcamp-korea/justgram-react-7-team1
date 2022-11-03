import React, { useRef, useState } from "react";
import Comment from "./Comment";

const Feed = () => {
  // 댓글 개수 관리 state
  const [commentArray, setCommentArray] = useState([]); // 댓글에 입력되는 배열(상태값) state를 선언

  // 댓글 상태 관리
  const [id, setId] = useState(1); // key값으로 쓸 id 선언
  const value = useRef(); // 댓글 input창의 값을 value로 담기위해 선언

  //댓글을 추가하는 함수
  const addComment = () => {
    setId(id + 1); // 세터로 id 값을 하나씩 증가시킴
    const newComment = {
      id: id,
      content: value.current.value, // ref로 가져온값
    };
    setCommentArray([...commentArray, newComment]); // 배열을 분해하고 객체 요소를 추가해서 다시 객체로 저장
  };

  return (
    <div className="feedComponent">
      <div className="feed">
        <div className="feedTop">
          <div className="feedTop-left">
            <img className="feedTop-img" src="/images/9129-modified.png" />
            <span className="feedTop-id">Kiminsee</span>
          </div>
          <span className="dotdot">...</span>
        </div>
        <div className="feedimage">
          <img src="/images/shrimp.jpeg" className="shrimp" />
        </div>
        <div className="feedMenuBar">
          <div className="feedMenuBar-left">
            <img src="/images/heart.png" />
            <img src="/images/speech.png" />
            <img src="/images/upload.png" />
          </div>
          <img src="/images/ribbon.png" />
        </div>
        <div className="feedReply-like">
          <img className="feedReply-logo" src="/images/j logo.png" />
          <span className="likeFont">Justgram</span>님
          <span className="likeFont">외 10명</span>이 좋아합니다
        </div>
        <div className="feedReply-all">
          <div className="feedReply">
            <div className="feedReply-ment">
              <span className="feedId">kiminsee</span>
              <span className="feedMent">새우다 새우!!</span>
            </div>
            {/* commentArray로 만들어지는 배열들을 map함수를 사용해서 하나하나
            적용해서 배열갯수만큼 리턴해준다. */}
            {commentArray.map((comment) => {
              return <Comment key={comment.id} content={comment.content} />;
            })}
          </div>
          <p className="timeMent">12분전</p>
        </div>
        <div className="feedInput">
          <input
            className="feedInput-left"
            type="text"
            placeholder="댓글 달기..."
            ref={value}
          />
          <button className="feedInput-right" onClick={addComment}>
            게시
          </button>
        </div>
      </div>
      <div className="feed">
        <div className="feedTop">
          <div className="feedTop-left">
            <img className="feedTop-img" src="/images/9129-modified.png" />
            <span className="feedTop-id">Kiminsee</span>
          </div>
          <span className="dotdot">...</span>
        </div>
        <div className="feedimages">
          <img src="/images/IMG_1840.jpeg" className="shrimp" />
        </div>
        <div className="feedMenuBar">
          <div className="feedMenuBar-left">
            <img src="/images/heart.png" />
            <img src="/images/speech.png" />
            <img src="/images/upload.png" />
          </div>
          <img src="/images/ribbon.png" />
        </div>
        <div className="feedReply-like">
          <img className="feedReply-logo" src="/images/j logo.png" />
          <span className="likeFont">Justgram</span>님
          <span className="likeFont">외 19명</span>이 좋아합니다
        </div>
        <div className="feedReply-all">
          <div className="feedReply">
            <div class="feedReply-ment">
              <span class="feedId">kiminsee</span>
              <span class="feedMent">푸켓에서</span>
            </div>
            <div class="feedReply-ment">
              <span class="feedId">Justgram</span>
              <span class="feedMent">와 부럽다..</span>
              <p class="timeMent">18분전</p>
            </div>
          </div>
        </div>
        <div className="feedInput">
          <input
            className="feedInput-left"
            type="text"
            placeholder="댓글 달기..."
          />
          <button className="feedInput-right">게시</button>
        </div>
      </div>
      <div className="feed">
        <div className="feedTop">
          <div className="feedTop-left">
            <img className="feedTop-img" src="/images/9129-modified.png" />
            <span className="feedTop-id">Kiminsee</span>
          </div>
          <span className="dotdot">...</span>
        </div>
        <div className="feedimages">
          <img src="/images/IMG_2015.jpeg" className="shrimp" />
        </div>
        <div className="feedMenuBar">
          <div className="feedMenuBar-left">
            <img src="/images/heart.png" />
            <img src="/images/speech.png" />
            <img src="/images/upload.png" />
          </div>
          <img src="/images/ribbon.png" />
        </div>
        <div className="feedReply-like">
          <img className="feedReply-logo" src="/images/j logo.png" />
          <span className="likeFont">Justgram</span>님
          <span className="likeFont">외 16명</span>이 좋아합니다
        </div>
        <div className="feedReply-all">
          <div className="feedReply">
            <div calss="feedReply-ment">
              <span className="feedId">kiminsee</span>
              <span className="feedMent">오늘은 밀면!</span>
            </div>
            <div calss="feedReply-ment">
              <span class="feedId">Justgram</span>
              <span class="feedMent">맛있어보여!!</span>
              <p class="timeMent">38분전</p>
            </div>
          </div>
          <div className="feedInput">
            <input
              className="feedInput-left"
              type="text"
              placeholder="댓글 달기..."
            />
            <button className="feedInput-right">게시</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
