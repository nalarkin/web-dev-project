// // import { connectToDatabase } from "../utils/mongodb";
// import Movie from '../models/movie';
// import { InferGetServerSidePropsType } from 'next'
// import { connectToDatabase } from '../services/database.service';

// // import useSWR from 'swr';

// export async function getServerSideProps() {

//   // const movies = await db
//   //   .collection("movies")
//   //   .find({})
//   //   .sort({ metacritic: -1 })
//   //   .limit(20)
//   //   .toArray();

//   return {
//     props: {
//       movies: JSON.parse(JSON.stringify(movies)),
//     },
//   };
// }

// function Movies({ movies }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <div>
//       <h1>Top 20 Movies of All Time</h1>
//       <p>
//         <small>(According to Metacritic)</small>
//       </p>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.title}>
//             <h2>{movie.title}</h2>
//             // <h3>{movie.metacritic}</h3>
//             <p>{movie.plot}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Movies;
export {};
