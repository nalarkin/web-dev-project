/* eslint-disable import/no-anonymous-default-export */
// External Dependencies

// import { ObjectId } from 'mongodb';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import Product from '../../../models/product';
import { connectToDatabase } from '../../../services/database.service';
// Global Config

// GET
// export default async (_req: NextApiRequest, res: NextApiResponse) => {
//   const { secrets } = await connectToDatabase();
//   try {
//     // @ts-ignore
//     const products = (await secrets
//       .find({})
//       .limit(20)
//       .toArray()) as unknown as Product[];
//     res.json(products);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

const updateDocument = (change: number) => {
  const operation = {
    $inc: {
      quantity: change,
    },
  };

  return operation;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { secrets } = await connectToDatabase();
  try {
    switch (req.method) {
      case 'GET': {
        // @ts-ignore
        const products = (await secrets
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
            const result = await secrets.updateOne(
              { _id: new ObjectId(product._id) },
              updateDocument(-1 * product.quantity)
            );
            return result;
          })
        );
        // const result = await secrets.findOne({
        //   _id: new ObjectId(parsed[0]?._id),
        // });

        // console.log(`RESULT IS = ${JSON.stringify(result, null, 2)}`);
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
  }
};

// POST

// PUT

// DELETE
