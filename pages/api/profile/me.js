export default function handler(req, res) {
  res.status(200).json({
    name: 'John Doe',
    username: 'johndoe',
    userColor: '#5c36ba',
    userId: '12345',
    email: 'johndoe@peopledatalabs.com',
    avatar: 'https://i.pravatar.cc/300',
    bio: 'I am a software engineer',
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
  });
}
