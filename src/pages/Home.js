import React from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';

export default function Home() {
  return (
    <AuthWrapper authenticationRequired={false}>

    </AuthWrapper>
  )
}
