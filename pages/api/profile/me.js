import { find } from 'lodash';

import users from '../../../constants/users';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const user = find(users, (user) => user.userId === 12345);
    res.status(200).json(user);
  } else {
    res.status(405).send({ message: 'Method not allowed' });
  }
}
