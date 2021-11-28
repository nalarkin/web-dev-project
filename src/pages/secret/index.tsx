import React from 'react';

import { useAuth } from '../../components/auth/AuthProvider';
import LoginForm from '../../components/auth/LoginForm';

const ProtectedContent = () => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return (
      <>
        <div>You must be signed in to view this content</div>
        <LoginForm />
      </>
    );
  }
  return <div>Secret stuff goes here</div>;
};

const SecretPage = () => {
  const { isLoggedIn, logIn, logOut } = useAuth();

  return (
    <div>
      {JSON.stringify(isLoggedIn)}
      <br />
      <button onClick={() => logIn()}>Log in</button>
      <br />
      <button onClick={() => logOut()}>Log Out</button>
      <ProtectedContent />
    </div>
  );
};

export default SecretPage;
