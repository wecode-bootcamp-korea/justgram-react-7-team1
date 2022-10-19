import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [isvalid, setIsvalid] = useState(false);

  const preventSubmit = (e) => {
    e.preventDefault();
  };
  const handleInput = (e) => {
    setFirstInput(e.target.value);
    firstInput.includes('@') && secondInput.length >= 5
      ? setIsvalid(true)
      : setIsvalid(false);
  };
  const handlePwdInput = (e) => {
    setSecondInput(e.target.value);
    firstInput.includes('@') && secondInput.length >= 5
      ? setIsvalid(true)
      : setIsvalid(false);
  };

  return (
    <div className='container log'>
      <header>justgram</header>

      <form className='login-area' onChange={preventSubmit}>
        <input
          onChange={handleInput}
          value={firstInput}
          className='login-area__input'
          type='text'
          placeholder='이메일@필수'
        />
        <input
          value={secondInput}
          onChange={handlePwdInput}
          className='login-area__input login-area__input2'
          type='password'
          placeholder='비밀번호(5글자이상작성해주세요)'
        />
      </form>

      <Link to='/main' className='login-btn'>
        <button style={{ backgroundColor: isvalid ? '#1C71E8' : '#cde9f4' }}>
          로그인
        </button>
      </Link>

      <div className='footer-area'>
        <a href='#' className='footer'>
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
