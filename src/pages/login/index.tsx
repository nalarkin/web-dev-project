import React from 'react';

import Router from 'next/router';

import { useAuth } from '../../components/auth/AuthProvider';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  // const router = Router
  if (isLoggedIn) {
    Router.push('/');
  }
  return <LoginForm />;
};

export default LoginPage;
