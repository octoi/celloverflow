import { firestore } from '../firebase';

export function saveUser(userData) {
  const userRef = firestore.collection('users').doc(userData?.email);

  userRef.get().then(firebaseUser => {
    if (firebaseUser.exists) userRef.update(userData);
    else userRef.set(userData);
  });
}