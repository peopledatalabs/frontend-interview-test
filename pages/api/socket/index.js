import { sample } from 'lodash';
import { Server } from 'socket.io';

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
      socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
      });

      setInterval(() => {
        const user = sample(users);
        const message = sample(messages);
        socket.emit('message', { userId: user.userId, message });
      }, 5000);
    });
  }

  res.end();
};

export default SocketHandler;
