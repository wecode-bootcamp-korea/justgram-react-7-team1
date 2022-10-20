import React from "react";

const Comment = ({ content }) => {
  return (
    <p className="commentP">
      <span className="writer">dawon_Oh</span>
      <span className="tag">@friend_1</span>
      <span className="content">{content}</span>
    </p>
  );
};

export default Comment;
