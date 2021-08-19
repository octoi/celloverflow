import React from 'react';
import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { Button } from '../styles/headerStyles';

export default function CustomModal({ isOpen, onOpen, onClose ,children, ui, title, footer }) {
  return (
    <div>
      <div onClick={onOpen}>
        {ui && ui}
        {!ui && (
          <Button>Show Modal</Button>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent style={{ background: 'var(--secondary-color)' }}>
          {title && <ModalHeader>{title}</ModalHeader>}
          <ModalCloseButton />
          <ModalBody pb={6}>
            {children}
          </ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContent>
      </Modal>
    </div>
  )
}
