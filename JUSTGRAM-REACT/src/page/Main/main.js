import React, { useState, useEffect } from 'react';
import Feed from './Feed';
import './Main.scss';

function Main() {
  const [feedArray, setFeedArray] = useState([]);
  const [userEmail, setUserEmail] = useState();
  useEffect(() => {
    fetch('/data/FeedData.json')
      .then((res) => res.json())
      .then((res) => setFeedArray(res.feed));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
      alert('유저가 아닙니다!');
      return;
    }
    fetch('http://localhost:8000/users/me', {
      method: 'GET',
      headers: {
        token: token,
      },
    })
      .then((res) => res.json())
      .then((json) => setUserEmail(json.email));
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
          {userEmail ? (
            <span>{userEmail}</span>
          ) : (
            <img
              src='images/profile.png'
              alt=''
              style={{ width: '20px', height: '20px' }}
            />
          )}
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
