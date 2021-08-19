// Get user data from session if exists

import React, { useEffect } from 'react';
import getUserObject from '../../utils/loginHelper';
import { auth } from '../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { Login as userLogin } from '../../redux/actions/userLogin';

export default function AuthInitializer({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userData => {
      const user = getUserObject(userData);
      dispatch(userLogin(user));
    })
  }, [dispatch]);

  return (
    <div>
      {children}
    </div>
  )
}
