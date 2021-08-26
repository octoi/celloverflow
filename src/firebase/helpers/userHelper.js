import { firestore } from '../firebase';

export function saveUser(userData, isSaving = false) {
  return new Promise((resolve, reject) => {
    const userRef = firestore.collection('users').doc(userData?.email);

    userRef.get().then(firebaseUser => {
      if (firebaseUser.exists) {
        userRef.update(userData);
        const firebaseUserData = firebaseUser.data();

        const returnData = isSaving ? userData : firebaseUserData;
        resolve(returnData);
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

export function getUserDataByUsername(username) {
  return new Promise((resolve, reject) => {
    const userRef = firestore.collection("users").where("username", "==", username);

    userRef.get().then(firebaseUser => {
      firebaseUser.docs.forEach(user => {
        if (user.exists) resolve(user.data());
        else reject('User does not exists 😔');
      })
    }).catch(reject)
  });
}