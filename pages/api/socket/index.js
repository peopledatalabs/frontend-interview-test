import { sample } from 'lodash';
import { Server } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';

import messages from '../../../constants/messages';
import users from '../../../constants/users';

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server, {
      path: '/api/socket',
    });
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      socket.on('messages', (msg) => {
        socket.broadcast.emit('messages', { id: uuidv4(), ...msg });
      });

      setInterval(() => {
        const user = sample(users);
        const message = sample(messages);
        socket.emit('messages', { id: uuidv4(), userId: user.userId, message });
      }, 1000);

      const user = sample(users);
      const message = sample(messages);
      socket.emit('messages', { id: uuidv4(), userId: user.userId, message });
    });
  }

  res.end();
};

export default SocketHandler;
