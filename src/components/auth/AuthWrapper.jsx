import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AuthWrapper({ children, authenticationRequired = false }) {
  // redirect to specific page according to authentication

  const user = useSelector(state => state.user?.user);

  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const pathname = location.pathname;

  const nextPathName = queryParams.get('next') || '/app'; // `?next={path}`

  useEffect(() => {
    if (!user && authenticationRequired) history.push(`/login?next=${pathname}`);
    if (user && !authenticationRequired) history.push(nextPathName);
  }, [user, history, pathname, nextPathName, authenticationRequired]);

  return <div>{children}</div>;
}