/* eslint-disable import/no-anonymous-default-export */
// External Dependencies

// import { ObjectId } from 'mongodb';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import Product from '../../../models/product';
import { client } from '../../../services/database.service';
// Global Config

const updateDocument = (change: number) => {
  const operation = {
    $inc: {
      quantity: change,
    },
  };

  return operation;
};

// GET
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await client.connect();
    const productDb = client
      .db(process.env.DB_NAME)
      .collection(process.env.PRODUCTS_COLLECTION_NAME ?? '');
    switch (req.method) {
      case 'GET': {
        // @ts-ignore
        const products = (await productDb
          .find({})
          .limit(20)
          .toArray()) as unknown as Product[];
        res.json(products);
        break;
      }
      case 'PATCH': {
        const parsed = JSON.parse(req.body) as Product[];
        // console.log(`PATCH METHOD ${JSON.stringify(parsed)}`);
        await Promise.all(
          parsed.map(async (product: Product) => {
            const result = await productDb.updateOne(
              { _id: new ObjectId(product._id) },
              updateDocument(-1 * product.quantity)
            );
            return result;
          })
        );
        // console.log(
        //   `ALL RESULTS = ${JSON.stringify(allUpdatedResults, null, 2)}`
        // );
        res.status(200).json({});
        break;
      }
      default:
        break;
    }
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
};

// POST

// PUT

// DELETE
