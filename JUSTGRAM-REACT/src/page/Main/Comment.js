import React from 'react';
import './Comment.scss';

function Comment({ content, nickname }) {
  return (
    <div>
      <span className='bold'>yezee</span>
      <span>{content}</span>
    </div>
  );
}

export default Comment;
