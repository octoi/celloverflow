import { firestore, timestamp } from '../firebase';

export const saveAnswer = (answerData) => {
  return new Promise((resolve, reject) => {
    const finalAnswerData = {
      ...answerData,
      accepted: false,
      votes: 0,
      voters: [],
      createdAt: timestamp.now(),
    }

    const answerRef = firestore.collection('answers');
    answerRef.add(finalAnswerData)
      .then(resolve)
      .catch(reject)
  });
}