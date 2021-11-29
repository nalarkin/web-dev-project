import useSWR from 'swr';

import ProductCard from '../../components/ProductCard';
import Spinner from '../../components/Spinner';
import Product from '../../models/product';
// import { connectToDatabase } from "../utils/mongodb";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR('/api/products', fetcher);
  if (error) return 'An error has occurred.';
  if (!data) return <Spinner />;
  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 mt-6">
        All Products
      </h1>
      {/* <RawHtml string={collection.descriptionHtml} className="text-lg" /> */}
      <p className="text-sm text-gray-500 mt-5 mb-5">
        {data.length} {data.length > 1 ? 'products' : 'product'}
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {data.map((product: Product) => (
          <li key={product._id?.toString()}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
