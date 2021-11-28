// /* eslint-disable import/no-anonymous-default-export */
// // External Dependencies

// // import { ObjectId } from 'mongodb';
// import Movie from '../../models/movie';
// import { collections, connectToDatabase } from '../../services/movies.service';

// // Global Config

// // GET
// export default async (req, res) => {
//   await connectToDatabase();
//   try {
//     const movies = (await collections.movies
//       .find({})
//       .sort({ metacritic: -1 })
//       .limit(20)
//       .toArray()) as unknown as Movie[];
//     res.json(movies);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// // POST

// // PUT

// // DELETE

export {};
