import React from 'react';

import { useRouter } from 'next/router';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

import { useAuth } from './AuthProvider';

const LoginIcon = () => {
  const { isLoggedIn, logOut } = useAuth();
  const router = useRouter();
  const handleClick = (loggedIn: boolean) => {
    if (!loggedIn) {
      router.push('/login');
    } else {
      logOut();
    }
  };

  return (
    <button className="" onClick={() => handleClick(isLoggedIn)}>
      <div className="flex items-center">
        <div className="mr-1">{isLoggedIn ? 'Sign Out' : 'Sign In'}</div>
        {isLoggedIn ? (
          <AiOutlineLogout size={25} />
        ) : (
          <AiOutlineLogin size={25} />
        )}
      </div>
    </button>
  );
};

export default LoginIcon;
