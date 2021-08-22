/*
Dear me,
Try to upgrade to firebase v9 beta to reduce bundle size
And share some videos of TechWithTim to your friends (first make some)
*/

import firebase from 'firebase';
import firebaseConfig from './firebaseConfig'; // create a file with firebase config

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const timestamp = firebase.firestore.Timestamp;
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, firestore, timestamp, provider }