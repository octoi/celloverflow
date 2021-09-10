import React, { useState } from 'react';
import MarkdownPreview from '../../components/MarkdownPreview';
import { MarkdownContainer } from '../../styles/questionStyles';
import { saveAnswer } from '../../firebase/helpers/answerHelper';
import {
  useDisclosure,
  useToast,
  Text,
  Flex,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Spinner
} from '@chakra-ui/react';

export default function AnswerBtn({ questionId, user }) {
  const [answerBody, setAnswerBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const showToast = useToast();

  const answerQuestion = () => {
    setIsLoading(true);
    saveAnswer({
      username: user?.username,
      userEmail: user?.email,
      question: questionId,
      body: answerBody,
    }).then(() => {
      setIsLoading(false);
      onClose();
      window.location.reload();
    }).catch(() => {
      setIsLoading(false);
      showToast({
        title: 'Failed to answer 😶',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
      });
    })
  }

  return (
    <div>
      <i className="share fas fa-reply" onClick={onOpen}></i>

      <Drawer isFullHeight placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="var(--secondary-color)">
          <DrawerHeader borderBottomWidth="1px">
            <Flex alignItems="center">
              <Text fontSize="2xl">Answer 📝</Text>
              <Button
                onClick={answerQuestion}
                size="lg"
                disabled={answerBody.trim().length === 0 || isLoading}
                background="var(--accent-color)"
                ml={2}
                _hover={answerBody.trim().length === 0 ? {} : { opacity: 0.8 }}
              >{isLoading ? <Spinner /> : 'Answer'}</Button>
            </Flex>
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <MarkdownContainer>
              <div className="utils">
                <Button
                  onClick={() => setIsPreview(!isPreview)}
                  size="lg"
                  width="100%"
                  background="var(--primary-color)"
                  _hover={{ opacity: 0.8 }}
                >Show {!isPreview ? 'Preview' : 'Raw'}</Button>
              </div>
              {!isPreview ? <textarea
                placeholder='Type your answer (Markdown Supported)'
                value={answerBody}
                onChange={(e) => setAnswerBody(e.target.value)}
                disabled={isLoading}
              /> : <MarkdownPreview markdown={answerBody} />}
              <div className="preview">
                <MarkdownPreview markdown={answerBody} />
              </div>
            </MarkdownContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
