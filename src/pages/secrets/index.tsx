import React from 'react';

import useSWR from 'swr';

import { useAuth } from '../../components/auth/AuthProvider';
import LoginForm from '../../components/auth/LoginForm';
import ProductGallary from '../../components/products/ProductGallary';
import Spinner from '../../components/Spinner';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProtectedContent = () => {
  const { data, error } = useSWR('/api/secrets', fetcher);
  if (error) return <Spinner />;
  if (!data) return <Spinner />;
  return (
    <ProductGallary title="Secret Sales" products={data} isSecret={true} />
  );
};

const LoginRequest = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl md:text-3xl text-gray-900 mb-6 mt-6 text-center">
        You must be logged in to view this content
      </h1>
      <LoginForm />
    </div>
  );
};

const SecretPage = () => {
  const { isLoggedIn } = useAuth();

  return <div>{isLoggedIn ? <ProtectedContent /> : <LoginRequest />}</div>;
};

export default SecretPage;
// import { connectToDatabase } from "../utils/mongodb";

SecretPage.meta = {
  title: 'Secret Page',
  description: '',
};
