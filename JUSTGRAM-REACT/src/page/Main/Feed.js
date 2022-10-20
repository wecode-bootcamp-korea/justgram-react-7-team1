import React, { useState, useRef } from 'react';
import './Feed.scss';

function Feed({ img }) {
  const [comment, setComment] = useState();
  const [id, setId] = useState(1);
  const value = useRef();
  const [commentArray, setCommentArray] = useState([]);

  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      content: value.current.value,
    };
    setCommentArray([...commentArray, newComment]);
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
              <span className='bold'>10명</span> <span>이 좋아합니다</span>
            </div>

            <div className='main-four__state'>
              <div className='main-four__state__chat'>
                <span className='bold'>yezee-e</span>
                <span>헤외여행가고싶따</span>
                <span className='opcity'>...더보기</span>
              </div>
              <div className='main-four__state__chat'>
                <span className='bold'>rak</span>
                <span>나랑같이가자~😁</span>
              </div>
              <div className='main-four__state__chat'>
                {commentArray.map((comment) => {
                  return (
                    <div key={comment.id}>
                      <span className='bold'>yezee</span>
                      <span>{comment.content}</span>
                    </div>
                  );
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
