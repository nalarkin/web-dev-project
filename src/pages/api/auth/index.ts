/* eslint-disable import/no-anonymous-default-export */
// External Dependencies

// import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import User from '../../../models/user';
import { client } from '../../../services/database.service';
// Global Config

// GET
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const { client } = await connectToDatabase();
  const body = JSON.parse(req.body);
  try {
    await client.connect();
    switch (req.method) {
      case 'POST': {
        // const { username, password } = req.body;
        const { username, password } = body;
        const user = (await client
          .db(process.env.DB_NAME)
          .collection(process.env.USERS_COLLECTION_NAME ?? '')
          .findOne({ username, password })) as User;

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
  } finally {
    await client.close();
  }
};
