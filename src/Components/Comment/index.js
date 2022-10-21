import React from "react";

export const Comment = ( {id, userName, content, onDelete} ) => {
  return (
    <div className="oneComment">
      <span className="writerName">{userName}</span>&nbsp;<span>{content}</span>    
      <img className="deleteIcon" alt="delete" src="/images/delete.png" onClick={onDelete} /> 
    </div>
  )
}

