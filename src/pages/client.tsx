// import useSWR from 'swr';

// import Movie from '../models/movie';
// // import { connectToDatabase } from "../utils/mongodb";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// export default function Top() {
//   const { data, error } = useSWR('/api/movie', fetcher);
//   if (error) return 'An error has occurred.';
//   if (!data) return 'Loading...';
//   return (
//     <div>
//       <h1>Top 1000 Movies of All Time</h1>
//       <p>
//         <small>(According to Metacritic)</small>
//       </p>
//       <ul>
//         {data.map((movie: Movie, idx: number) => (
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
export {};
