/* eslint-disable import/no-anonymous-default-export */
// External Dependencies

// import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import User from '../../../models/user';
import { connectToDatabase } from '../../../services/database.service';
// Global Config

// GET
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { users } = await connectToDatabase();
  const body = JSON.parse(req.body);
  switch (req.method) {
    case 'POST': {
      // const { username, password } = req.body;
      const { username, password } = body;
      const user = (await users.findOne({ username, password })) as User;

      if (user === null) {
        res.status(400).send({ message: 'Invalid credentials' });
      } else {
        res.json(user);
      }
      break;
    }

    default:
      throw new Error('Reached default statement which should never happen');
  }
};
