import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Home = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io({ path: '/api/socket' });

    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('message', (msg) => {
      setMessages((oldMessages) => [msg, ...oldMessages]);
    });

    return () => socket.off('message');
  }, []);

  return (
    <>
      <h1>Messages</h1>
      {messages.map((msg, index) => (
        <p key={index}>
          <span>{`${msg.userId} - `}</span>
          {msg.message}
        </p>
      ))}
    </>
  );
};

export default Home;
