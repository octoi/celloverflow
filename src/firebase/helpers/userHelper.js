import { firestore } from '../firebase';

export function saveUser(userData) {
  return new Promise((resolve, reject) => {
    const userRef = firestore.collection('users').doc(userData?.email);

    userRef.get().then(firebaseUser => {
      if (firebaseUser.exists) {
        userRef.update(userData);
        resolve(firebaseUser.data());
      } else {
        userRef.set({
          ...userData,
          website: '',
          occupation: '',
          bio: '',
        });
        resolve(userData);
      }
    }).catch(err => {
      console.log(err)
      reject()
    });
  });
}

export function getUserData(userEmail) {
  return new Promise((resolve, reject) => {
    const userRef = firestore.collection("users").doc(userEmail);

    userRef.get().then(firebaseUser => {
      if (firebaseUser.exists) resolve(firebaseUser.data());
      else reject();
    })
  });
}