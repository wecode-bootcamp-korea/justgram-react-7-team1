import React, { useState, useEffect } from 'react';
import Feed from './Feed';
import './Main.scss';

function Main() {
  const [feedArray, setFeedArray] = useState([]);
  useEffect(() => {
    fetch('/data/FeedData.json')
      .then((res) => res.json())
      .then((res) => setFeedArray(res.feed));
  }, []);

  return (
    <div className='container main'>
      <nav className='nav-bar container'>
        <div className='nav-bar__first'>
          <img
            src='images/logo.png'
            alt=''
            style={{ width: '20px', height: '20px' }}
          />
          <p>|</p>
          <p className='nav-bar__first__font'>justgram</p>
        </div>
        <div className='nav-bar__second'>
          <input type='text' placeholder='🔍검색' />
        </div>

        <div className='nav-bar__third'>
          <img
            src='images/explore.png'
            alt='img'
            style={{ width: '20px', height: '20px' }}
          />
          <img
            src='images/heart.png'
            alt=''
            style={{ width: '20px', height: '20px' }}
          />
          <img
            src='images/profile.png'
            alt=''
            style={{ width: '20px', height: '20px' }}
          />
        </div>
      </nav>

      {feedArray.map((feed) => {
        return (
          <Feed
            key={feed.id}
            img={feed.img}
            myComment={feed.myComment}
            comment={feed.comment}
            likes={feed.likes}
            commenter={feed.commenter}
          />
        );
      })}
    </div>
  );
}

export default Main;
