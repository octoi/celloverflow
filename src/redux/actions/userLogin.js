import { auth } from '../../firebase/firebase';

export const Login = (userData) => async (dispatch) => {
  dispatch({ type: 'USER_LOGIN', payload: userData });
}

export const logout = () => async (dispatch) => {
  auth.signOut();
  dispatch({ type: 'USER_LOGOUT' });
}