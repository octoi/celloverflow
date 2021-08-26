import { firestore, timestamp } from '../firebase';

export const saveQuestionToFirestore = (questionData) => {
  return new Promise((resolve, reject) => {
    const questionRef = firestore.collection('questions');
    questionRef.add({ ...questionData, votes: 0, voters: {}, createdAt: timestamp.now() })
      .then(resolve)
      .catch(reject)
  });
}

export const getAllQuestions = () => {
  return new Promise((resolve, reject) => {
    const questionRef = firestore.collection('questions');
    questionRef.get().then(document => {
      const allQuestions = document.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc?.id,
        }
      });
      resolve(allQuestions)
    }).catch(err => {
      console.log(err);
      reject();
    })
  });
}

export const getQuestionById = (questionId) => {
  return new Promise((resolve, reject) => {
    const questionRef = firestore.collection('questions').doc(questionId);

    questionRef.get().then(question => {
      if (!question.exists) reject();
      resolve({ ...question.data(), id: question.id })
    }).catch(err => {
      console.log(err)
      reject()
    });
  });
}

export const deleteQuestion = (questionId) => {
  return new Promise((resolve, reject) => {
    const questionRef = firestore.collection('questions').doc(questionId);

    questionRef.delete().then(resolve).catch(err => {
      console.log(err)
      reject()
    });
  });
}

export const voteQuestion = (questionId, votes, voters) => {
  return new Promise((resolve, reject) => {
    const questionRef = firestore.collection('questions').doc(questionId);

    questionRef.update({
      votes,
      voters
    }).then(resolve).catch(err => {
      console.log(err)
      reject()
    });
  });
}