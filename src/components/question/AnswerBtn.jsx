import React, { useState } from 'react';
import MarkdownPreview from '../../components/MarkdownPreview';
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton
} from '@chakra-ui/react';
import { MarkdownContainer } from '../../styles/questionStyles';

export default function AnswerBtn({ questionId, user }) {
  const [answerBody, setAnswerBody] = useState('');
  const [isPreview, setIsPreview] = useState(false);


  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <p className="share" onClick={onOpen}>answer</p>

      <Drawer isFullHeight placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="var(--secondary-color)">
          <DrawerHeader borderBottomWidth="1px">Answer 📝</DrawerHeader>
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
