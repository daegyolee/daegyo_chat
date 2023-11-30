// login.js
import React, { useState } from 'react';
import './css/login.css'; // CSS 파일을 import합니다.


function Login({ onLoginSuccess, onLoginFail }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      fetch('http://localhost:8090/login/login.do', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then(data => {
        if (data.success) {
          onLoginSuccess(username); // 로그인 성공 처리
        } else {
          onLoginFail(); // 로그인 실패 처리
        }
      })
      .catch(error => {
        console.error('로그인 오류:', error);
        onLoginFail(); // 에러 처리
      });
    };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Daegyo Talk</h1>
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>아이디:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label>비밀번호:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="login-links">
                        <a href="/signup">회원가입</a>
                        <a href="/find-username">아이디 찾기</a>
                        <a href="/find-password">비밀번호 찾기</a>
            </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
