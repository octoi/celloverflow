import { firestore, timestamp } from '../firebase';

export const saveQuestionToFirestore = (questionData) => {
  return new Promise((resolve, reject) => {
    const questionRef = firestore.collection('questions');
    questionRef.add({ ...questionData, votes: 0, voters: [], createdAt: timestamp.now() })
      .then(resolve)
      .catch(reject)
  });
}
