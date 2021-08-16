// userData come from firebase authentication
export const Login = (userData) => async (dispatch) => {
  dispatch({ type: 'USER_LOGIN', payload: userData });
}

export const logout = () => async (dispatch) => {
  dispatch({ type: 'USER_LOGOUT' });
}