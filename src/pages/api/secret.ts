// /* eslint-disable import/no-anonymous-default-export */
// // External Dependencies

// // import { ObjectId } from 'mongodb';
// import { ObjectId } from 'mongodb';
// import type { NextApiRequest, NextApiResponse } from 'next';

// import { connectToDatabase } from '../../services/database.service';
// // Global Config

// // GET
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   // const basicAuth = res.getHeader('authorization');
//   const { authorization: basicAuth } = req.headers;

//   if (basicAuth) {
//     const [auth] = `${basicAuth}`.split(' ');

//     if (auth) {
//       const id = Buffer.from(auth, 'base64').toString();
//       const { db } = await connectToDatabase();
//       const product = await db.findOne({ _id: new ObjectId(id) });
//       if (product !== null) {
//         /** FULLY AUTHENTICATED */
//       }
//     }
//   }

//   // try {
//   //   // @ts-ignore
//   //   const product = await db.findOne({ _id: ObjectId(id) });
//   //   if (product === null || !('_id' in product)) {
//   //     res.status(404).send('This product does not exist');
//   //   } else {
//   //     res.json(product);
//   //   }
//   // } catch (error) {
//   //   res.status(500).send(error);
//   // }
//   // res.status(401).send(error);
// };
export {};
