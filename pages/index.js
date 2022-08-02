/* eslint-disable */
import io from 'socket.io-client';

const Home = () => {
  const socket = io({ path: '/api/socket' });

  return (
    <h1 className="pt-10 text-5xl font-bold text-center">
      Hello world!
    </h1>
  );
};

export default Home;
