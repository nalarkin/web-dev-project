import useSWR from 'swr';

import ProductGallary from '../../components/products/ProductGallary';
import Spinner from '../../components/Spinner';
// import { connectToDatabase } from "../utils/mongodb";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR('/api/products', fetcher);
  if (error) return <Spinner />;
  if (!data) return <Spinner />;

  return (
    <>
      <ProductGallary title="All Products" products={data} />
    </>
  );
}

ProductsPage.meta = {
  title: "Products | Nate's Notebook",
  description: 'School supplies at an incredible price',
};
