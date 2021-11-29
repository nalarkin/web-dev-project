/* eslint-disable import/no-anonymous-default-export */
// External Dependencies

// import { ObjectId } from 'mongodb';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '../../../services/database.service';
// Global Config

// GET
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const { id } = _req.query;
  // const { secrets } = await connectToDatabase();

  // try {
  // @ts-ignore
  try {
    await client.connect();
    const secret = await client
      .db(process.env.DB_NAME)
      .collection(process.env.SECRETS_COLLECTION_NAME ?? '')
      .findOne({ _id: new ObjectId(`${id}`) });

    if (secret === null || !('_id' in secret)) {
      // res.status(404).json({ error: 'This product does not exist' });
      res.status(404).json({ message: 'This product does not exist' });
    } else {
      res.json(secret);
    }
  } finally {
    await client.close();
  }
  // } catch (err) {
  //   res.status(404).send({
  //     error: `This product does not exist. ${(err as Error).message}`,
  //   });
  // }
};
