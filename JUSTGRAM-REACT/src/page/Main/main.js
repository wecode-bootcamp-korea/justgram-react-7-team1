import React from 'react';
import Feed from './Feed';
import './Main.scss';

function Main() {
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
      <Feed img={'images/4.jpeg'} />
      <Feed img={'images/키카.jpg'} />
      <Feed img={'images/부산.PNG'} />
    </div>
  );
}

export default Main;
