import React, { useState , useRef, useEffect } from 'react';
import { Comment } from '../Comment'  

export const Feed = ( { feedData } ) => {  
  const [commentArray, setCommentArray] = useState([]);     
  const commentValue = useRef();

  useEffect(() => {
    fetch("/data/comments.json")
    .then((res) => res.json())
    .then((com) => {
       setCommentArray(com.data)
    });
  }, []);

  const deleteComment = (commentId) => {
    const newArr = commentArray.filter((comment) => comment.id !== commentId);
    setCommentArray(newArr);
  };  

  return (
    <div className="threeFeeds">
      <div className="feeds">
        <article>
          <div className="article-header">
            <div className="author-profile">
              <div className="author-profile-icon">
                <img className="icon-profile" alt="author" src={feedData.profileImage} />
              </div>
              <div className="author-info">
                <p id="author-id">{feedData.username}</p>           
              </div>
            </div>
            <div className="author-more">
              <img className="icon-more" alt="more" src="/images/more.png" />
            </div>
          </div>

          <div className="frame">
            <img className="photo1" alt="feedphoto" src={feedData.feedImages[0].imageUrl} />
          </div>
          
          <div className="feed-icons">
            <div className="feed-icons-left">
              <img className="icon-like" alt="like" src="/images/heart-red.png" />
              <img className="icon-chat" alt="chat" src="/images/chat.png" />
              <img className="icon-upload" alt="upload" src="/images/upload.png" />
            </div>
            <div className="feed-icons-right">
              <img className="icon-bookmark" alt="bookmark" src="/images/bookmark-white.png" />
            </div>
          </div>
        
          <div className="comment">
            <div className="like">
              <p className="like-it">좋아요 26개</p>
            </div>
          </div>  

          <div className="comment">
            <span className="writerName">{feedData.username}</span>&nbsp;<span>{feedData.content}</span>
        
            <div className="comment-bottom">              
              <span className="show-more">댓글 3개 모두 보기</span>           
            </div>

            {commentArray.map((comment) => (
            <Comment key={comment.id} userName={comment.userName} content={comment.content} onDelete={() => deleteComment(comment.id)}/>
            ))}      
            

            <div className="last-updated">             
              <div className="timeContainer">
                <span id="time-stamp">9월 12</span>
              </div>
            
              <div className="new-comment">
                <img className="smile" alt='smile' src="/images/smile.png" />
                <input type="text" className="new-comment-input" placeholder="댓글 달기..." 
                ref={commentValue} />
                <button className="comment-button">게시</button>
              </div>
            </div>
          </div>          
        </article>
      </div>   
    </div>  
  )
};

