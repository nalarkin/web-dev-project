import useSWR from 'swr';

import GradientBackground from '../components/hero/GradientBackground';
import Welcome from '../components/hero/Welcome';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
import Product from '../models/product';
// import { connectToDatabase } from "../utils/mongodb";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR<Product[]>('/api/products', fetcher);
  if (error) return 'An error has occurred.';
  if (!data) return <Spinner />;
  return (
    <div className="relative mb-12">
      <Welcome />
      <div className="bg-white p-12 shadow-xl rounded-xl mb-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {data.map((product: Product, idx: number) => (
            // eslint-disable-next-line no-underscore-dangle
            <li key={`${product._id ?? idx}`}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

HomePage.meta = {
  title: 'Nates dope site',
  description: 'my fav',
};
HomePage.hero = <GradientBackground />;
// HomePage.hero = <GradientBackground />;
