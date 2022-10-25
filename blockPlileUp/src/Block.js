import React from 'react';

export default function Block({ setBlock, num }) {
  return <button onClick={() => setBlock((cur) => !cur)}>블럭{num}버튼</button>;
}
