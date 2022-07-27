import { sample } from 'lodash';
import { Server } from 'socket.io';

const users = [
  {
    name: 'Jane Doe',
    username: 'janedoe',
    userColor: '#5c36ba',
    userId: '678910',
    email: 'janedoe@peopledatalabs.com',
    avatar: 'https://i.pravatar.cc/300',
    bio: 'I am a API developer',
    location: 'Miami, FL',
    website: 'https://www.peopledatalabs.com',
    social: {
      github: 'https://github.com/peopledatalabs',
      twitter: 'https://twitter.com/peopledatalabs',
      linkedin: 'https://www.linkedin.com/company/peopledatalabs',
      facebook: 'https://www.facebook.com/peopledatalabs',
      instagram: 'https://www.instagram.com/peopledatalabs',
    },
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    name: 'Jacob Doe',
    username: 'jacobdoe',
    userColor: 'hsl(36,100%,50%)',
    userId: '111213',
    email: 'jacobdoe@peopledatalabs.com',
    avatar: 'https://i.pravatar.cc/300',
    bio: 'I am a backend engineer',
    location: 'San Francisco, CA',
    website: 'https://www.peopledatalabs.com',
    social: {
      github: 'https://github.com/peopledatalabs',
      twitter: 'https://twitter.com/peopledatalabs',
      linkedin: 'https://www.linkedin.com/company/peopledatalabs',
      facebook: 'https://www.facebook.com/peopledatalabs',
      instagram: 'https://www.instagram.com/peopledatalabs',
    },
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    name: 'Jason Doe',
    username: 'jasondoe',
    userColor: 'red',
    userId: '141516',
    email: 'johndoe@peopledatalabs.com',
    avatar: 'https://i.pravatar.cc/300',
    bio: 'I am a data engineer',
    location: 'New York, NY',
    website: 'https://www.peopledatalabs.com',
    social: {
      github: 'https://github.com/peopledatalabs',
      twitter: 'https://twitter.com/peopledatalabs',
      linkedin: 'https://www.linkedin.com/company/peopledatalabs',
      facebook: 'https://www.facebook.com/peopledatalabs',
      instagram: 'https://www.instagram.com/peopledatalabs',
    },
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    name: 'Alex Doe',
    username: 'alexdoe',
    userColor: 'yellow',
    userId: '171819',
    email: 'alexdoe@peopledatalabs.com',
    avatar: 'https://i.pravatar.cc/300',
    bio: 'I am a ux/ui designer :)',
    location: 'Scottsdale, AZ',
    website: 'https://www.peopledatalabs.com',
    social: {
      github: 'https://github.com/peopledatalabs',
      twitter: 'https://twitter.com/peopledatalabs',
      linkedin: 'https://www.linkedin.com/company/peopledatalabs',
      facebook: 'https://www.facebook.com/peopledatalabs',
      instagram: 'https://www.instagram.com/peopledatalabs',
    },
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
];

const messages = [
  'Hello World',
  'Wow, this is a great app',
  'I am a great developer',
  'I am a great backend developer',
  'I am a great data engineer',
  'Data is the new oil',
  'Data is going to chnage the world',
  'People Data Labs is the best',
  'People Data is going to change the world',
  'Company Data is fantastic',
];

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
      socket.on('input-change', (msg) => {
        socket.broadcast.emit('update-input', msg);
      });

      socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
      });

      setInterval(() => {
        const user = sample(users);
        const message = sample(messages);
        socket.emit('message', { user, message });
      }, 5000);
    });
  }

  res.end();
};

export default SocketHandler;
