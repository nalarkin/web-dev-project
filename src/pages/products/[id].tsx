import { useRouter } from 'next/router';
import useSWR from 'swr';

import ProductDetails from '../../components/products/ProductDetails';
import Spinner from '../../components/Spinner';
import Product from '../../models/product';

// import { connectToDatabase } from "../utils/mongodb";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const DetailPage = ({ id }: { id: string | string[] | undefined }) => {
  const { data, error } = useSWR<Product>(
    id ? `/api/products/${id}` : null,
    fetcher
  );
  if (error) return <Spinner />;
  if (!data) return <Spinner />;
  return (
    <div>
      <ProductDetails product={data} />
      {/* <p>{`${JSON.stringify(data, null, 2)}`}</p> */}
    </div>
  );
};

export default function DetailedProductPage() {
  const router = useRouter();
  if (!router.isReady) return <Spinner />;
  const { id } = router.query;
  return <DetailPage id={id} />;
}
