// // import client from '../../lib/mongodb';
// import clientPromise from '../../lib/mongodb';

// export default async (req, res) => {
//   // const { db } = await connectToDatabase();
//   // const {db} = await client;

//   const movies = clientPromise
//     .collection('movies')
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();

//   res.json(movies);
// };
export {};
