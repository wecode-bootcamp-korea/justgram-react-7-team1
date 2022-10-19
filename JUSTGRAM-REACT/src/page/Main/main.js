import React from 'react';
import './main.scss';

function Main() {
  return (
    <div className='container sizing main'>
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
        <div>
          <input type='text' placeholder='🔍검색' className='nav-bar__second' />
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

          <img
            src='images/4.jpeg'
            alt='upload images'
            className='main-second'
          />

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
            </div>
          </div>

          <div className='main-five'>
            <div className='opcity time'>24분 전</div>
            <input
              type='text'
              placeholder='댓글 달기...'
              className='main-five__input'
            />
            <p className='main-five__button'>게시</p>
          </div>
        </div>
      </main>
      <main className='feed container'>
        <div className='feed-area'>
          <div className='main-first'>
            <div className='main-first__profile'>
              <img src='images/me.png' alt='' style={{ width: '10px' }} />
              <div>yezee-e</div>
            </div>
            <img src='images/more.png' alt='' />
          </div>

          <img src='images/키카.jpg' alt='' className='main-second' />

          <div className='main-third'>
            <div>
              <img
                src='images/redheart.png'
                alt=''
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src='images/chat.png'
                alt=''
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src='images/upload.png'
                alt=''
                style={{ width: '20px', height: '20px' }}
              />
            </div>
            <img
              src='images/bookmark.png'
              alt=''
              style={{ width: '20px', height: '20px' }}
            />
          </div>

          <div className='main-four'>
            <div>
              <img src='images/me.png' alt='' style={{ width: '15px' }} />
              <span className='bold'>jebbang님</span> <span>외</span>
              <span className='bold'>53명</span> <span>이 좋아합니다</span>
            </div>

            <div className='main-four__state'>
              <div className='main-four__state__chat'>
                <span className='bold'>yezee-e</span>
                <span>애랑 캠핑가고 싶다 같이 갈사람?</span>
                <span className='opcity'>...더보기</span>
              </div>
              <div className='main-four__state__chat'>
                <span className='bold'>rak</span>
                <span>나갈래 나도 대려가~</span>
              </div>
            </div>
          </div>

          <div className='main-five'>
            <div className='opcity time'>4주 전</div>
            <input
              type='text'
              placeholder='댓글 달기...'
              className='main-five__input'
            />
            <p className='main-five__button'>게시</p>
          </div>
        </div>
      </main>
      <main className='feed container'>
        <div className='feed-area'>
          <div className='main-first'>
            <div className='main-first__profile'>
              <img src='images/me.png' alt='' style={{ width: '10px' }} />
              <div>yezee-e</div>
            </div>
            <img src='images/more.png' alt='' />
          </div>

          <img src='images/부산.PNG' alt='' className='main-second' />

          <div className='main-third'>
            <div>
              <img
                src='images/redheart.png'
                alt=''
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src='images/chat.png'
                alt=''
                style={{ width: '20px', height: '20px' }}
              />
              <img
                src='images/upload.png'
                alt=''
                style={{ width: '20px', height: '20px' }}
              />
            </div>
            <img
              src='images/bookmark.png'
              alt=''
              style={{ width: '20px', height: '20px' }}
            />
          </div>

          <div className='main-four'>
            <div>
              <img src='images/me.png' alt='' style={{ width: '15px' }} />
              <span className='bold'>bbk_lovely님</span> <span>외</span>
              <span className='bold'>113명</span> <span>이 좋아합니다</span>
            </div>

            <div className='main-four__state'>
              <div className='main-four__state__chat'>
                <span className='bold'>yezee-e</span>
                <span>해운대놀러가서 찍은사진</span>
              </div>
              <div className='main-four__state__chat'>
                <span className='bold'>bbk_lovely</span>
                <span>우와 대박이네👀</span>
              </div>
            </div>
          </div>

          <div className='main-five'>
            <div className='opcity time'>24분 전</div>
            <input
              type='text'
              placeholder='댓글 달기...'
              className='main-five__input'
            />
            <p className='main-five__button'>게시</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
