// App.js
import React, { useState } from 'react';
import ChatPage from './ChatPage';
import Login from './login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(''); // 사용자 이름 상태 추가

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username); // 로그인 성공 시 username 설정
  };
  const handleLoginFail = () => {
    alert('로그인에 실패하였습니다.');
    setIsLoggedIn(false);
    // 로그인 실패 처리
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(''); // 로그아웃 시 username 초기화
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <ChatPage username={username} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} onLoginFail={handleLoginFail} />
      )}
    </div>
  );
}

export default App;
