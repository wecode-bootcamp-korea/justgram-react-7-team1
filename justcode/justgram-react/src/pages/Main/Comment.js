import React, { useRef, useState } from "react";

const Comment = ({ content }) => {
  return (
    <>
      <div className="feedReply-ment" key={Comment.id}>
        <span className="feedId">Justgram</span>
        <span className="feedMent">{content}</span>
      </div>
    </>
  );
};

export default Comment;
