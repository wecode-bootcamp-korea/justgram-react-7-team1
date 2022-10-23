import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef, useState } from "react";

const Comment = ({ userId, content }) => {
  return (
    <>
      <div className="feedReply-ment" key={Comment.id}>
        <span className="feedId">{userId}</span>
        <span className="feedMent">{content}</span>
      </div>
    </>
  );
};

export default Comment;
