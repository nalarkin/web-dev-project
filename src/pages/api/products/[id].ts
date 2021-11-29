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
  // const { client } = await connectToDatabase();
  try {
    await client.connect();
    const product = await client
      .db(process.env.DB_NAME)
      .collection(process.env.PRODUCTS_COLLECTION_NAME ?? '')
      .findOne({ _id: new ObjectId(`${id}`) });
    if (product === null || !('_id' in product)) {
      // res.status(404).json({ error: 'This product does not exist' });
      res.status(404).json({ error: 'This product does not exist' });
    } else {
      res.json(product);
    }
  } finally {
    await client.close();
  }
  // try {
  // @ts-ignore
  // const product = await db.findOne({ _id: ObjectId(id) });
  // if (product === null || !('_id' in product)) {
  //   // res.status(404).json({ error: 'This product does not exist' });
  //   res.status(404).json({ error: 'This product does not exist' });
  // } else {
  //   res.json(product);
  // }
  // } catch (err) {
  //   res.status(404).send({
  //     error: `This product does not exist. ${(err as Error).message}`,
  //   });
  // }
};
