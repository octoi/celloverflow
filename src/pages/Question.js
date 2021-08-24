import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { getQuestionById } from '../firebase/helpers/questionHelper';

export default function Question() {
  const [question, setQuestion] = useState();
  const { questionId } = useParams();

  const showToast = useToast();

  useEffect(() => {
    // getQuestionById(questionId).then(questionFromFirestore => {
    //   setQuestion(questionFromFirestore)
    // }).catch(err => {
    //   showToast({
    //     title: 'Failed to fetch data 😭',
    //     duration: 3000,
    //     isClosable: true,
    //     position: 'top-right',
    //     status: 'error',
    //   });
    // })
  }, [questionId, showToast])

  return (
    <div>

    </div>
  )
}
