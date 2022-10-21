import React, { useState , useRef } from 'react';
import './Main.scss';

function Main () {
  //댓글 개수 관리 state
  const [commentArray, setCommentArray] = useState([]);
 

  //댓글 상태관리
  const [id, setId] = useState(1);
  const value = useRef();

  //댓글추가함수
  const addComment = () => {
    setId(id + 1);
    const newComment = {
    id: id,
    content: value.current.value,
    };
    setCommentArray([...commentArray, newComment]);
  };
  

  return (
   <body>
   <nav>
		<div className="nav-content">
			<div className="nav-left">
				<img className="icon-insta" alt="insta-icon" src='/images/instagram.png'/>
				<span>justgram</span>
			</div>
			
      <div className="nav-center">
				<input type="text" id="search" placeholder="검색" />
			</div>
			
      <div className="nav-right">
				<div><img className="icon-explore" alt="explore-icon" src="/images/explore.png" /></div>
				<div><img className="icon-heart" alt="heart-icon" src="/images/heart.png" /></div>
				<div><img className="icon-profile" alt="profile-icon" src="/images/profile.png" /></div>
			</div>
		</div>
	</nav>
   
   <main> 
    <div className="threefeeds">
      <div className="feeds">
        <article>
          <div className="article-header">
            <div className="author-profile">
              <div className="author-profile-icon">
                <img className="icon-profile" alt="author"
                  src="/images/gangjeong_main.png" />
              </div>
              <div className="author-info">
                <p id="author-id">gangjeong_kim</p>           
              </div>
            </div>
            <div className="author-more">
              <img className="icon-more" alt="more" src="/images/more.png" />
            </div>
          </div>
          
          <div className="frame">
            <img className="photo1" alt="cat" src="/images/cat.jpg" />
          </div>
          
          <div className="feed-icons">
            <div className="feed-icons-left">
              <img className="icon-like" alt="like" src="/images/heart-red.png" />
              <img className="icon-chat" alt="chat" src="/images/chat.png" />
              <img className="icon-upload" alt="upload" src="/images/upload.png" />
            </div>
            <div className="feed-icons-right">
              <img className="icon-bookmark" alt="bookmark"
                src="/images/bookmark-white.png" />
            </div>
          </div>
          
          <div className="comment">
            <div className="like">
              <p className="like-it">좋아요 26개</p>
            </div>
            <div className="comment-first">
              <span id="comment-first-id">potato_cat_0314</span>
              <span id="comment-first-text"> 작은 앙마 김갱정</span>          
            </div>
            <div className="comment-second">
              <span id="comment-second-id">joy__sj</span>
              <span id="comment-second-text"> 우당당탕 강정쿤</span>
            </div>
            
            {commentArray.map((comment) => {
              return (
                <div className="comment-second" key={comment.id}>
                  <span id="comment-second-id">reccoonboy</span>
                  <span id="comment-second-text"> {comment.content}</span>
                </div> 
              )
            })}
                       
            <div className="comment-bottom">
              <div className="feed-comment-list"></div>
              <span className="show-more">댓글 3개 모두 보기</span>
              <div className="last-updated">
                <span id="time-stamp">9월 12</span>
              </div>
              
              <div className="new-comment">
                <img className="smile" alt='smile' src="/images/smile.png" />
                <input type="text" className="new-comment-input" placeholder="댓글 달기..." 
                ref={value} />
                <button className="comment-button" onClick={addComment}>게시</button>
              </div>
            </div>
            
          </div>
          
        </article>
      </div>

      
      <div className="feeds">
        <article>
          <div className="article-header">
            <div className="author-profile">
              <div className="author-profile-icon">
                <img className="icon-profile" alt="author"
                  src="/images/gangjeong_main.png" />
              </div>
              <div className="author-info">
                <p id="author-id">gangjeong_kim</p>           
              </div>
            </div>
            <div className="author-more">
              <img className="icon-more" alt="more" src="/images/more.png" />
            </div>
          </div>
          
          <div className="frame">
            <img className="photo2" alt="cat" src="/images/cat2.png" />
          </div>
          
          <div className="feed-icons">
            <div className="feed-icons-left">
              <img className="icon-like" alt="like" src="/images/heart-red.png" />
              <img className="icon-chat" alt="chat" src="/images/chat.png" />
              <img className="icon-upload" alt="upload" src="/images/upload.png" />
            </div>
            <div className="feed-icons-right">
              <img className="icon-bookmark" alt="bookmark"
                src="/images/bookmark-white.png" />
            </div>
          </div>
          
          <div className="comment">
            <div className="like">
              <p className="like-it">좋아요 33개</p></div>
            <div className="comment-first">
              <span id="comment-first-id">potato_cat_0314</span>
              <span id="comment-first-text"> 알사탕먹는 강정이</span>          
            </div>
            <div className="comment-second">
              <span id="comment-second-id">joy__sj</span>
              <span id="comment-second-text"> 말썽 좀 그만부려 강정이이</span>
            </div>

            {/* {commentArray.map((comment) => {
              return (
                <div className="comment-second" key={comment.id}>
                  <span id="comment-second-id">reccoonboy</span>
                  <span id="comment-second-text"> {comment.content}</span>
                </div> 
              )
            })}  */}

            <div className="feed-comment-list"></div>
            <p className="show-more">댓글 5개 모두 보기</p>
            <div className="last-updated">
              <span id="time-stamp">9월 7</span>
            </div>
          </div>
          
          <div className="new-comment">
            <img className="smile" alt='smile' src="/images/smile.png" />
            <input type="text" className="new-comment-input" placeholder="댓글 달기..."/>
            <div className="post">
              <button className="comment-button">게시</button></div>
          </div>
        </article>
      </div>    



      <div className="feeds">
        <article>
          <div className="article-header">
            <div className="author-profile">
              <div className="author-profile-icon">
                <img className="icon-profile" alt="author"
                  src="/images/gangjeong_main.png" />
              </div>
              <div className="author-info">
                <p id="author-id">gangjeong_kim</p>           
              </div>
            </div>
            <div className="author-more">
              <img className="icon-more" alt="more" src="/images/more.png" />
            </div>
          </div>
          
          <div className="frame">
            <img className="photo3" alt="cat" src="/images/cat3.png" />
          </div>
          
          <div className="feed-icons">
            <div className="feed-icons-left">
              <img className="icon-like" alt="like" src="/images/heart-red.png" />
              <img className="icon-chat" alt="chat" src="/images/chat.png" />
              <img className="icon-upload" alt="upload" src="/images/upload.png" />
            </div>
            <div className="feed-icons-right">
              <img className="icon-bookmark" alt="bookmark"
                src="/images/bookmark-white.png" />
            </div>
          </div>
          
          <div className="comment">
            <div className="like">
              <p className="like-it">좋아요 19개</p></div>
            <div className="comment-first">
              <span id="comment-first-id">potato_cat_0314</span>
              <span id="comment-first-text">강정이 드디어 배까면서 잔다요</span>          
            </div>
            <div className="comment-second">
              <span id="comment-second-id">joy__sj</span>
              <span id="comment-second-text">갱정이 간식 없음</span>
            </div>
            <div className="feed-comment-list"></div>
            <p className="show-more">댓글 7개 모두 보기</p>
            <div className="last-updated">
              <span id="time-stamp">9월 2</span>
            </div>
          </div>
          
          <div className="new-comment">
            <img className="smile" alt='smile' src="/images/smile.png" />
            <input type="text" className="new-comment-input" placeholder="댓글 달기..." />
            <div className="post">
              <button className="comment-button">게시</button></div>
          </div>
        </article>
      </div>
      
    </div>  
    
    <div className="main-right">
      <div className="login-user-header">
        <div className="login-user-profile">
          <div className="login-user-profile">
          <img id="login-profile-icon" alt="me" src="/images/mina.png" />
          </div>
        </div>
        <div className="login-user-info">		
          <p id="login-user-id">potato_cat_0314</p>
        </div>
      </div>

      <div className="story main-right-container">
        <div className="story-header header-title">
          <p>스토리</p>
          <p>모두 보기</p>
        </div>
        <div className="story-content">
          <div className="story-user">
            <div className="story-user-profile">
              <img className="user-icon" id="user1-icon" alt="rf1" src="/images/man.png" />
            </div> 
            <div className="story-user-info">		
              <p className="user-id" id="story-user1-id">user_id</p>
              <p className="user-update" id="story-user1-update">update</p>
            </div>	  
          </div>
          
          <div className="story-user">
            <div className="story-user-profile">
              <img className="user-icon" id="story-user2-icon" alt="rf2" src="/images/user.png" />
            </div> 
            <div className="story-user-info">		
              <p className="user-id" id="story-user2-id">user_id</p>
              <p className="user-update" id="story-user2-update">update</p>
            </div>	
          </div>

          <div className="story-user">
            <div className="story-user-profile">
              <img className="user-icon" id="story-user3-icon" alt="rf3" src="/images/user.png" />
            </div> 
            <div className="story-user-info">		
              <p className="user-id" id="story-user3-id">user_id</p>
              <p className="user-update" id="story-user3-update">update</p>
            </div>	
          </div>	

          <div className="story-user">
            <div className="story-user-profile">
              <img className="user-icon" id="story-user4-icon" alt="rf4" src="/images/user.png" />
            </div> 
            <div className="story-user-info">		
              <p className="user-id" id="story-user4-id">user_id</p>
              <p className="user-update" id="story-user4-update">update</p>
            </div>	
          </div>
        </div>
      </div>
         
      <div className="recommend main-right-container">
        <div className="recommend-header header-title">
          <p>회원님을 위한 추천</p>
          <p>모두 보기</p>
        </div>
        <div className="recommend-content">
          <div className="recommend-user">
            <div className="rf-profile">
              <img className="user-icon" id="rf1-icon" alt="rf1" src="/images/user.png" />
            </div> 
            <div className="rf-user-info">		
              <p className="user-id" id="rf1-id">user_id</p>
              <p className="user-update" id="rf1-update">location</p>
            </div>	
          </div>
           
          <div className="recommend-user">
            <div className="rf-profile">
              <img className="user-icon" id="rf1-icon" alt="rf1" src="/images/user.png" />
            </div> 
            <div className="rf-user-info">		
              <p className="user-id" id="rf1-id">user_id</p>
              <p className="user-update" id="rf1-update">location</p>
            </div>	
          </div>

          <div className="recommend-user">
            <div className="rf-profile">
              <img className="user-icon" id="rf1-icon" alt="rf1" src="/images/user.png" />
            </div> 
            <div className="rf-user-info">		
              <p className="user-id" id="rf1-id">user_id</p>
              <p className="user-update" id="rf1-update">location</p>
            </div>	
          </div>

          <div className="recommend-user">
            <div className="rf-profile">
              <img className="user-icon" id="rf1-icon" alt="rf1" src="/images/user.png" />
            </div> 
            <div className="rf-user-info">		
              <p className="user-id" id="rf1-id">user_id</p>
              <p className="user-update" id="rf1-update">location</p>
            </div>	
          </div>
        </div>
      </div>  
     </div>  
     </main>  
     </body>
  );
}

export default Main;