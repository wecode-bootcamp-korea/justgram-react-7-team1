// import React, { useState , useRef } from 'react';
// import { Comment } from '../Comment'  

// export const Feed = (props) => {
//   const [commentArray, setCommentArray] = useState([]);   
//   const [id, setId] = useState(1);
//   const commentValue = useRef();

//   const addComment = () => {
//     setId(id + 1);
//     const newComment = {
//     id: id,
//     content: commentValue.current.value,
//     };
//     setCommentArray([...commentArray, newComment]);
//     commentValue.current.value = "";
//   };

//   const deleteComment = (commentId) => {
//     const newArr = commentArray.filter((comment) => comment.id !== commentId);
//     setCommentArray(newArr);
//   };



//   return (
//     <div className="threeFeeds">
//     <div className="feeds">
//       <article>
//         <div className="article-header">
//           <div className="author-profile">
//             <div className="author-profile-icon">
//               <img className="icon-profile" alt="author"
//                 src={props.profileImage} />
//             </div>
//             <div className="author-info">
//                 <p id="author-id">{props.writer}</p>           
//             </div>
//           </div>
//           <div className="author-more">
//             <img className="icon-more" alt="more" src="/images/more.png" />
//           </div>
//         </div>

//         <div className="frame">
//           <img className="photo1" alt="cat" src={props.ImageURL} />
//         </div>
          
//         <div className="feed-icons">
//           <div className="feed-icons-left">
//             <img className="icon-like" alt="like" src="/images/heart-red.png" />
//             <img className="icon-chat" alt="chat" src="/images/chat.png" />
//             <img className="icon-upload" alt="upload" src="/images/upload.png" />
//           </div>
//           <div className="feed-icons-right">
//             <img className="icon-bookmark" alt="bookmark"
//               src="/images/bookmark-white.png" />
//           </div>
//         </div>
        
//         <div className="comment">
//           <div className="like">
//             <p className="like-it">좋아요 26개</p>
//           </div>
//         </div>  

//         <div className="comment">
//           <span className="writerName">{props.writer}</span>&nbsp;<span>{props.feedContent}</span>
        
//           <div className="comment-bottom">
//             <div className="feed-comment-list"></div>
//             <span className="show-more">댓글 3개 모두 보기</span>           
//           </div>

//           {commentArray.map((comment) => (
//           <Comment key={comment.id} writer={props.writer} comment={comment} onDelete={() => deleteComment(comment.id)}/>
//           ))}      
          

//             <div className="last-updated">
             
//               <div className="timeContainer">
//               <span id="time-stamp">9월 12</span>
//               </div>
            
//             <div className="new-comment">
//               <img className="smile" alt='smile' src="/images/smile.png" />
//               <input type="text" className="new-comment-input" placeholder="댓글 달기..." 
//               ref={commentValue} />
//               <button className="comment-button" onClick={addComment}>게시</button>
//             </div>
//           </div>
//         </div>          
//       </article>
//     </div>  
//     </div>  
//   )
// };

