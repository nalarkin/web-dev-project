import useSWR from 'swr';

import Product from '../../models/product';
// import { connectToDatabase } from "../utils/mongodb";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Top() {
  const { data, error } = useSWR('/api/products', fetcher);
  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return (
    <div>
      <h1>Products Selling</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {data.map((product: Product, idx: number) => (
          // eslint-disable-next-line no-underscore-dangle
          <li key={`${product._id ?? idx}`}>
            <h2>{product.name}</h2>
            {/* <h3>{movie.metacritic}</h3> */}
            <p>{product.quantity}</p>
            <p>{`PRICE: ${JSON.stringify(product.price, null, 2)}`}</p>
            <p>{product._id}</p>
            <p>{`${JSON.stringify(product, null, 2)}`}</p>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={product.image_url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
