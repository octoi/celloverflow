import React from 'react'
import AuthWrapper from '../components/auth/AuthWrapper';

export default function Application() {
  return (
    <AuthWrapper authenticationRequired={true}>

    </AuthWrapper>
  )
}
