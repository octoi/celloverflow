import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getQuestionById } from '../firebase/helpers/questionHelper';
import { Container, QuestionAndAnswerWrapper } from '../styles/questionStyles';
import AuthWrapper from '../components/auth/AuthWrapper';
import QuestionPart from '../components/question/QuestionPart';
import Answers from '../components/question/Answers';

export default function Question() {
  const [question, setQuestion] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { questionId } = useParams();

  const showToast = useToast();
  const user = useSelector(state => state.user?.user);

  useEffect(() => {
    setIsLoading(true);
    getQuestionById(questionId).then(questionFromFirestore => {
      setQuestion(questionFromFirestore);
      setIsLoading(false);
    }).catch(err => {
      setIsLoading(false);
      showToast({
        title: 'Failed to fetch data 😭',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
      });
    })
  }, [questionId, showToast])

  return (
    <AuthWrapper authenticationRequired={true}>
      <Container>
        {isLoading && (
          <div style={{ width: "100%" }}>
            <SkeletonTheme color="var(--secondary-color)" highlightColor="#444">
              <Skeleton height={500} count={3} style={{ borderRadius: '25px', marginBottom: "10px" }} />
            </SkeletonTheme>
          </div>
        )}
        {!isLoading && question && <QuestionAndAnswerWrapper>
          <QuestionPart question={question} user={user} />
          <Answers />
        </QuestionAndAnswerWrapper>}
      </Container>
    </AuthWrapper>
  )
}
