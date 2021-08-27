import React from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import { Container } from '../styles/homeStyles';

export default function Home() {
  return (
    <AuthWrapper authenticationRequired={false}>
      <Container>
        Hello World is awesome
      </Container>
    </AuthWrapper>
  )
}
