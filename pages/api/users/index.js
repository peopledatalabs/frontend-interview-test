import users from '../../../constants/users';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else {
    res.status(405).send({ message: 'Method not allowed' });
  }
}
