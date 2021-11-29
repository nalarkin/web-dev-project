import Router from 'next/router';
import useSWR from 'swr';

import { useAuth } from '../../components/auth/AuthProvider';
import ProductDetails from '../../components/products/ProductDetails';
import Spinner from '../../components/Spinner';
import Product from '../../models/product';

// import { connectToDatabase } from "../utils/mongodb";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  // console.log('response is ', JSON.stringify(res, null, 2));
  // if (res.status === 404) throw new Error('Page does not exist');

  return res.json();
};

const SecretProductDetails = () => {
  // const router = Router.useRouter();
  const { id } = Router.query;
  const { data, error } = useSWR<Product>(
    id ? `/api/secrets/${id}` : null,
    fetcher
  );
  if (error) return <div>{error.message}</div>;
  if (!data) return <Spinner />;
  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default function SecretProductPage() {
  // const router = useRouter();
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    Router.replace('/');
  } else {
    return <SecretProductDetails />;
  }
  return <div></div>;
}
