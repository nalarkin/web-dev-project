// // External Dependencies

// // import { ObjectId } from 'mongodb';
// import Game from '../../models/game';
// import { collections } from '../../services/database.service';

// // Global Config

// // GET
// export default async (req, res) => {
//   // const { db } = await connectToDatabase();
//   // const {db} = await client;
//   try {
//     const games = (await collections.games.find({}).toArray()) as Game[];
//     // const movies = clientPromise
//     //   .collection('movies')
//     //   .find({})
//     //   .sort({ metacritic: -1 })
//     //   .limit(20)
//     //   .toArray();

//     res.json(games);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// // POST

// // PUT

// // DELETE

export {};
