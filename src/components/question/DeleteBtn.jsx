import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDisclosure, Button, useToast, Spinner } from '@chakra-ui/react';
import { deleteQuestion as requestDeleteQuestion } from '../../firebase/helpers/questionHelper';
import CustomModal from '../Modal';

export default function DeleteBtn({ questionId }) {
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const showToast = useToast();
  const history = useHistory();

  const deleteQuestion = () => {
    setIsLoading(true)
    requestDeleteQuestion(questionId).then(() => {
      setIsLoading(false)
      history.push('/')
      onClose();
    }).catch(err => {
      setIsLoading(false)
      showToast({
        title: 'Failed to delete 😶',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
      });
    })
  }

  return (
    <CustomModal
      ui={<p className="delete">delete</p>}
      title="Are you sure ?? 🥲"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <Button
        _hover={{ opacity: 0.8 }}
        backgroundColor="var(--accent-color)"
        size="lg"
        width="48%"
        onClick={onClose}
        disabled={isLoading}
      >Nah</Button>
      <Button
        _hover={{ opacity: 0.8 }}
        backgroundColor="var(--error-color)"
        size="lg"
        ml={2}
        width="48%"
        disabled={isLoading}
        onClick={deleteQuestion}
      >{isLoading ? <Spinner /> : 'Yep'}</Button>
    </CustomModal>
  )
}