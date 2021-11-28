/* eslint-disable import/no-anonymous-default-export */
// External Dependencies

// import { ObjectId } from 'mongodb';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import {
  collections,
  connectToDatabase,
} from '../../../services/database.service';
// Global Config

// GET
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const { id } = _req.query;
  await connectToDatabase();
  try {
    // @ts-ignore
    const products = await collections.products?.findOne({ _id: ObjectId(id) });
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// POST

// PUT

// DELETE
