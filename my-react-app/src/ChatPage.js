import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import './css/chatPage.css';

function ChatPage({ username, onLogout }) {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
    // 파일 업로드 처리 함수 (추후 구현)
    const handleFileUpload = () => {
        // 파일 업로드 로직 구현
      };
  useEffect(() => {
    const sock = new SockJS('http://localhost:8090/chat-socket');
    const stompClient = Stomp.over(sock);
    
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/messages', (message) => {
        const receivedMsg = JSON.parse(message.body);
        setMessages(messages => [...messages, receivedMsg]);
      });
    });
  
    setSocket(stompClient);
  
    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);
  
  const sendMessage = () => {
    if (socket && newMessage.trim()) {
      const message = {
        sender: username,
        content: newMessage,
        timestamp: new Date()
      };
  
      socket.send("/app/chat/send", {}, JSON.stringify(message)); // 서버로 메시지 전송
  
      // 새 메시지를 messages 상태에 추가
      setMessages(messages => [...messages, message]);
  
      setNewMessage(''); // 입력 필드 초기화
    }
  };
  
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Daegyo Talk</h1>
        <div className="chat-header-right">
          <span>{username}님 환영합니다.</span>
          <button onClick={onLogout}>로그아웃</button>
        </div>
      </div>
      <div className="chat-messages">
  {messages.map((msg, index) => (
    <div 
      key={index} 
      className={`message-bubble ${msg.sender === username ? 'my-message' : 'other-message'}`}
    >
      <div className="message-info">
        <span className="message-sender">{msg.sender}</span>
        <span className="message-time">{new Date(msg.timestamp).toLocaleTimeString()}</span>
      </div>
      <div className="message-text">{msg.content}</div> {/* 'text'를 'content'로 변경 */}
    </div>
  ))}
</div>
      <div className="message-input">
      <button onClick={handleFileUpload}>파일</button>
        <input 
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메시지 입력"
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>전송</button>
      </div>
    </div>
  );
}

export default ChatPage;
