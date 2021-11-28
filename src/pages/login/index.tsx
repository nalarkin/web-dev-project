import React from 'react';

import { useRouter } from 'next/router';

import { useAuth } from '../../components/auth/AuthProvider';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  if (isLoggedIn) {
    router.push('/');
  }
  return <LoginForm />;
};

export default LoginPage;
