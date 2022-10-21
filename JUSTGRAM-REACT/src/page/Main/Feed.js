import React, { useState, useRef, useEffect } from 'react';
import './Feed.scss';
import Comment from './Comment';
import CommentData from './CommentData';

function Feed({ img, myComment, comment, likes, commenter }) {
  const [id, setId] = useState(1);
  const value = useRef();
  //댓글 개수관리
  const [commentArray, setCommentArray] = useState([]);
  const [mockArray, setMockArray] = useState([]);

  //게시버튼 클릭으로 댓글입력
  const addComment = (e) => {
    if (value.current.value === '') {
      e.preventDefault();
    } else {
      commentForm();
    }
  };
  //input창에 enter로 댓글입력
  const enterComment = (e) => {
    if (value.current.value === '') {
      e.preventDefault();
    } else if (e.keyCode === 13) {
      commentForm();
    }
  };

  function commentForm() {
    setId(id + 1);
    const newComment = {
      id: id,
      content: value.current.value,
    };
    setCommentArray([...commentArray, newComment]);
    value.current.value = '';
  }

  useEffect(() => {
    commentData();
  }, []);

  const commentData = () => {
    fetch('/data/mockData.json')
      .then((res) => res.json())
      .then((res) => setMockArray(res.data));
  };

  return (
    <>
      <main className='feed container'>
        <div className='feed-area'>
          <div className='main-first'>
            <div className='main-first__profile'>
              <img
                src='images/me.png'
                alt='profile icon'
                style={{ width: '10px' }}
              />
              <div>yezee-e</div>
            </div>
            <img src='images/more.png' alt='setting icon' />
          </div>

          <img src={img} alt='upload images' className='main-second' />

          <div className='main-third'>
            <div>
              <img
                src='images/redheart.png'
                alt='heart icon'
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src='images/chat.png'
                alt='chat icon'
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src='images/upload.png'
                alt='share icon'
                style={{ width: '20px', height: '20px' }}
              />
            </div>
            <img
              src='images/bookmark.png'
              alt='bookmark icon'
              style={{ width: '20px', height: '20px' }}
            />
          </div>

          <div className='main-four'>
            <div>
              <img
                src='images/me.png'
                alt='profile icon'
                style={{ width: '20px' }}
              />
              <span className='bold'>rak님</span> <span>외</span>
              <span className='bold'>{likes}명</span> <span>이 좋아합니다</span>
            </div>

            <div className='main-four__state'>
              <div className='main-four__state__chat'>
                <span className='bold'>yezee-e</span>
                <span>{myComment}</span>
                <span className='opcity'>...더보기</span>
              </div>
              <div className='main-four__state__chat'>
                <span className='bold'>{commenter}</span>
                <span>{comment}</span>
              </div>
              <div className='main-four__state__chat'>
                {mockArray.map((data) => {
                  return (
                    <CommentData
                      key={data.id}
                      content={data.content}
                      nickname={data.nickname}
                    />
                  );
                })}
              </div>
              <div className='main-four__state__chat'>
                {commentArray.map((comment) => {
                  return <Comment key={comment.id} content={comment.content} />;
                })}
              </div>
            </div>
          </div>

          <div className='main-five'>
            <div className='opcity time'>24분 전</div>
            <input
              type='text'
              placeholder='댓글 달기...'
              className='main-five__input'
              ref={value}
              onKeyUp={enterComment}
            />
            <p className='main-five__button' onClick={addComment}>
              게시
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Feed;
