import { useRouter } from 'next/router';
import useSWR from 'swr';

import ProductDetails from '../../components/products/ProductDetails';
import Product from '../../models/product';

// import { connectToDatabase } from "../utils/mongodb";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  // console.log('response is ', JSON.stringify(res, null, 2));
  // if (res.status === 404) throw new Error('Page does not exist');

  return res.json();
};

export default function Top() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR<Product>(
    id ? `/api/products/${id}` : null,
    fetcher
  );
  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return (
    <div>
      <ProductDetails product={data} />
      <p>{`${JSON.stringify(data, null, 2)}`}</p>
    </div>
  );
}
