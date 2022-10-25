import { useState } from 'react';
import Block from './Block';
import './App.scss';
import MiniBlock from './MiniBlock';

function App() {
  const [firstBlock, setFirstBlock] = useState(false);
  const [secondBlock, setSecondBlock] = useState(false);
  const [thirdBlock, setThirdBlock] = useState(false);

  return (
    <div className='wrapper'>
      <div className='block'>
        <Block setBlock={setFirstBlock} num={1} />
        <Block setBlock={setSecondBlock} num={2} />
        <Block setBlock={setThirdBlock} num={3} />
      </div>
      <div className='miniBlock'>
        {firstBlock && <MiniBlock>블럭1</MiniBlock>}
        {secondBlock && <MiniBlock>블럭2</MiniBlock>}
        {thirdBlock && <MiniBlock>블럭3</MiniBlock>}
      </div>
    </div>
  );
}

export default App;

//&& 연산자는 삼항연산자와 다르게 그 자리에 무조건있거나 없거나
//조건부 렌더링에 대한 이해와 props 대신 childern으로 값을 받는 방법공부
