import { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const Home = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    socket = io('http://localhost:3000');

    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('update-input', (msg) => {
      setInput(msg);
    });

    socket.on('message', (msg) => {
      console.log(msg);
    });

    return () => socket.emit('end');
  }, []);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    socket.emit('input-change', e.target.value);
  };

  return (
    <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />
  );
};

export default Home;
