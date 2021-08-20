// Get user data from session if exists

import React, { useEffect } from 'react';
import getUserObject from '../../utils/loginHelper';
import { auth } from '../../firebase/firebase';
import { getUserData } from '../../firebase/helpers/userHelper';
import { useDispatch } from 'react-redux';
import { Login as userLogin } from '../../redux/actions/userLogin';

export default function AuthInitializer({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userData => {
      if (!userData) return;
      const user = getUserObject(userData);
      getUserData(user?.email).then(userData => {
        dispatch(userLogin(userData));
      }).catch(() => {
        dispatch(userLogin(user));
      });
    })
  }, [dispatch]);

  return (
    <div>
      {children}
    </div>
  )
}
