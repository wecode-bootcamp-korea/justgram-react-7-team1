import React, { useState, useRef, useEffect } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  // const [firstInput, setFirstInput] = useState(''); //값이 바로 적용되지 않아서 유효성검사에는 잘쓰이지않는다
  // const [secondInput, setSecondInput] = useState('');

  const id = useRef(); //값을 참조한다(값에 바로 접근이 가능하다)
  const pw = useRef();
  // const [isvalid, setIsvalid] = useState(false);

  const preventSubmit = (e) => {
    e.preventDefault();
  };
  // const handleInput = () => {
  //   id.current.value.includes('@') && pw.current.value.length >= 5
  //     ? setIsvalid(true)
  //     : setIsvalid(false);
  // };
  const handleLogin = () => {
    fetch('http://localhost:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id.current.value,
        password: pw.current.value,
      }),
    })
      .then((res) => res.json())
      .then((json) => localStorage.setItem('token', json.token));
  };

  return (
    <div className='container log'>
      <header>justgram</header>

      <form className='login-area' onChange={preventSubmit}>
        <input
          // onChange={handleInput}
          ref={id}
          className='login-area__input'
          type='text'
          placeholder='이메일@필수'
        />
        <input
          ref={pw}
          // onChange={handleInput}
          className='login-area__input login-area__input2'
          type='password'
          placeholder='비밀번호(5글자이상작성해주세요)'
        />
      </form>

      <Link to='/main' className='login-btn'>
        <button
          onClick={handleLogin}
          // style={{ backgroundColor: isvalid ? '#1C71E8' : '#cde9f4' }}
          // disabled={isvalid === false}
        >
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
