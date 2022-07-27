import { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const Home = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchSocket = async () => {
      await fetch('/api/socket');
    };

    fetchSocket();

    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('message', (msg) => {
      setMessages((oldMessages) => [msg, ...oldMessages, msg]);
    });

    return () => socket.off('message');
  }, []);

  return (
    <>
      <h1>Messages</h1>
      {messages.map((msg, index) => (
        <p key={index}>
          <span>{`${msg.user.username} - `}</span>
          {msg.message}
        </p>
      ))}
    </>
  );
};

export default Home;
