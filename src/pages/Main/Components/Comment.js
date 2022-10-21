import React from "react";

const Comment = ({ content, writer }) => {
  return (
    <p className="commentP">
      <span className="writer">{writer}</span>
      <span className="tag">@friend_1</span>
      <span className="content">{content}</span>
    </p>
  );
};

export default Comment;
