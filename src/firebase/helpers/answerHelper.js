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

export const getAllAnswers = (questionId) => {
  return new Promise((resolve, reject) => {
    const answerRef = firestore.collection('answers').where('question', '==', questionId);
    answerRef.get().then(document => {
      const allAnswers = document.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc?.id,
        }
      });
      resolve(allAnswers)
    }).catch(err => {
      console.log(err);
      reject(err);
    })
  });
}

export const voteAnswer = (answerId, votes, voters) => {
  return new Promise((resolve, reject) => {
    const questionRef = firestore.collection('answers').doc(answerId);

    questionRef.update({
      votes,
      voters
    }).then(resolve).catch(err => {
      console.log(err)
      reject()
    });
  });
}

export const deleteAnswer = (answerId) => {
  return new Promise((resolve, reject) => {
    const questionRef = firestore.collection('answers').doc(answerId);

    questionRef.delete().then(resolve).catch(err => {
      console.log(err)
      reject()
    });
  });
}