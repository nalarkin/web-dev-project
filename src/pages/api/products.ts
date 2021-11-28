/* eslint-disable import/no-anonymous-default-export */
// External Dependencies

// import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import Product from '../../models/product';
import {
  collections,
  connectToDatabase,
} from '../../services/database.service';
// Global Config

// GET
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  try {
    // @ts-ignore
    const products = (await collections.products
      .find({})
      .limit(20)
      .toArray()) as unknown as Product[];
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// POST

// PUT

// DELETE
