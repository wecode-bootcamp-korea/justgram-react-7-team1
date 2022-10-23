import React, { useEffect, useRef, useState } from "react";
import Comment from "./Comment";

const Feed = ({ userId, content, feedImage, likeNumber }) => {
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

  useEffect(() => {
    fetch("./data/commentData.json") // commentData 객체를 fetch해서 불러온다
      .then((res) => res.json()) // response되는 객체를 json데이터로 바꿔준다
      .then((data) => setCommentArray(data.comments)); // json 형태로 불러운 데이터를 위에서 세터함수로 만든 setCommentArray에 넣는다
  }, []); //  data만 넣으면 객체로 나오기 때문에 data.comments로 넣어서 배열로 불러운다

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
          <img src={feedImage} className="shrimp" />
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
          <span className="likeFont">외 {likeNumber}명</span>이 좋아합니다
        </div>
        <div className="feedReply-all">
          <div className="feedReply">
            <div className="feedReply-ment">
              <span className="feedId">{userId}</span>
              <span className="feedMent">{content}</span>
            </div>
            {/* commentArray로 만들어지는 배열들을 map함수를 사용해서 하나하나
            적용해서 배열갯수만큼 리턴해준다. */}
            {commentArray.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  userId={comment.userId}
                  content={comment.content}
                />
              );
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
    </div>
  );
};

export default Feed;
