import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AuthWrapper({ children, authenticationRequired = false }) {
  // redirect to specific page according to authentication

  const user = useSelector(state => state.user?.user);
  const history = useHistory();

  useEffect(() => {
    if (!user && authenticationRequired) history.push('/login');
    if (user && !authenticationRequired) history.push('/app');
  }, [user, history, authenticationRequired]);

  return <div>{children}</div>;
}