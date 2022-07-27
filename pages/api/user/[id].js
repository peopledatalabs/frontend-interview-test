import { find } from 'lodash';

import users from '../../../constants/users';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    if (id) {
      const user = find(users, (user) => user.userId === Number(id));
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    } else {
      res.status(400).send({ message: 'Bad request. Must provide id.' });
    }
  } else {
    res.status(405).send({ message: 'Method not allowed' });
  }
}
