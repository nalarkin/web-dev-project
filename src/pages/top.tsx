// import { InferGetStaticPropsType } from 'next';

// import Movie from '../models/movie';
// import useSWR from 'swr';
// // import { connectToDatabase } from "../utils/mongodb";

// export default function Top({
//   movies,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <div>
//       <h1>Top 1000 Movies of All Time</h1>
//       <p>
//         <small>(According to Metacritic)</small>
//       </p>
//       <ul>
//         {movies.map((movie: Movie, idx: number) => (
//           <li key={`${movie.id ?? idx}`}>
//             <h2>{movie.title}</h2>
//             {/* <h3>{movie.metacritic}</h3> */}
//             <p>{movie.plot}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   // const client = await clientPromise;
//   // const db = await client.db(process.env.MONGODB_DB);
//   // const { db } = await connectToDatabase();

//   // const movies = await db
//   //   .collection("movies")
//   //   .find({})
//   //   .sort({ metacritic: -1 })
//   //   .limit(1000)
//   //   .toArray();
//   // const {data, error} = useSWR('/api/movies', {
//   //   fetcher()
//   // });
//   fetch()

//   return {
//     props: {
//       movies: JSON.parse(JSON.stringify(movies)),
//     },
//   };
// }
export {};
