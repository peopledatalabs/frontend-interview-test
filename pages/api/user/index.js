import { find } from 'lodash';

import users from '../../../constants/users';

export default function handler(req, res) {
  if (req.method === 'POST') {
    if (req.body.id) {
      const user = find(users, (user) => user.userId === req.body.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    } else {
      res.status(400).send({ message: 'Bad request' });
    }
  } else {
    res.status(405).send({ message: 'Method not allowed' });
  }
}
