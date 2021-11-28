import { useRouter } from 'next/router';
import useSWR from 'swr';

// import { connectToDatabase } from "../utils/mongodb";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Top() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);
  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return (
    <div>
      <h1>Products Selling</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <p>{`${JSON.stringify(data, null, 2)}`}</p>
    </div>
  );
}
