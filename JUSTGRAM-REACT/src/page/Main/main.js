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
      <Feed
        img={'images/4.jpeg'}
        myComment={'헤외여행가고싶따'}
        comment={'나랑같이가자~😁'}
      />
      <Feed
        img={'images/키카.jpg'}
        myComment={'애랑 캠핑가고 싶다 같이 갈사람?'}
        comment={'저요!'}
      />
      <Feed
        img={'images/부산.PNG'}
        myComment={'해운대 놀러가서 찍은사진'}
        comment={'우와 대박이네👀'}
      />
    </div>
  );
}

export default Main;
