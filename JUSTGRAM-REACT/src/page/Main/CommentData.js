import React from 'react';

function CommentData({ content, nickname }) {
  return (
    <div>
      <span className='bold'>{nickname}</span>
      <span>{content}</span>
    </div>
  );
}

export default CommentData;
