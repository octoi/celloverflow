/*
userData = data from firebase auth
get wanted data from userData
*/
const getUserObject = (userData) => {
  const userUsername = userData.email.split('@')[0]; // removing provider from email

  const user = {
    name: userData.displayName,
    email: userData.email,
    profile: userData.photoURL,
    username: userUsername,
  }

  return user;
}

export default getUserObject;