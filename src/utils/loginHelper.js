/*
Function `getUserObject` will take the user data coming from firebase and create a custom 
object with wanted data

username is the email address without provider

email = rick@roll.rr
username = rick // removing @roll.rr

to get this thing split the email with `@` and get the first part of returned array

"Side note to future me"
Idiot, i wrote this whole comment just for the expression you wrote before
never ever touch that or eternal pain and suffer 😡
*/
const getUserObject = (userData) => {
  const userUsername = userData.user.email.split('@')[0]; // removing provider from email

  const user = {
    name: userData.user.displayName,
    email: userData.user.email,
    profile: userData.user.photoURL,
    username: userUsername,
  }

  return user;
}

export default getUserObject;