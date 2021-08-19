import React from 'react'
import AuthWrapper from '../components/auth/AuthWrapper';
import { Container } from '../styles/appStyles';

import PostSection from '../components/app/PostSection';
import UserDetails from '../components/app/UserDetails';

export default function Application() {
  return (
    <AuthWrapper authenticationRequired={true}>
      <Container>
        <PostSection />
        <UserDetails />
      </Container>
    </AuthWrapper>
  )
}
