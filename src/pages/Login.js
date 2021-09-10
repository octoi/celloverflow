import React, { useState } from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import getUserObject from '../utils/loginHelper';
import { Flex, Heading, Button, Link, Text, Spinner, useToast } from '@chakra-ui/react';
import { auth, provider } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { Login as userLogin } from '../redux/actions/userLogin';
import { saveUser as saveUserToFirestore } from '../firebase/helpers/userHelper';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const showToast = useToast();
  const dispatchAction = useDispatch();

  const loginWithGoogle = () => {
    setIsLoading(true);
    auth.signInWithPopup(provider).then(userData => {
      const user = getUserObject(userData.user); // getting wanted user data from user data 

      saveUserToFirestore(user).then(newUserData => {
        setIsLoading(false);
        dispatchAction(userLogin(newUserData));
      }).catch(() => {
        setIsLoading(false);
        showToast({
          title: 'Failed to login 😭',
          position: 'top-right',
          duration: 3000,
          status: 'error',
          isClosable: true,
        });
      });
    }).catch(err => {
      console.log(err);
      showToast({
        title: 'Failed to login with google 😖',
        position: 'top-right',
        duration: 3000,
        status: 'error',
        isClosable: true,
      });
    })
  }

  return (
    <AuthWrapper authenticationRequired={false}>
      <Flex height="90vh" alignItems="center" justifyContent="center" >
        <Flex direction="column" width="45vh" background="var(--secondary-color)" p={12} rounded={6}>
          <Heading mb={4}>Get started</Heading>
          <Text mb={4} opacity="0.5">
            By signing in you agree our
            <Link href='/page/terms'> Terms & services</Link>
          </Text>
          <Button onClick={loginWithGoogle} size="lg" width='100%' disabled={isLoading} style={{ background: 'var(--accent-color)' }}>
            {isLoading ? <Spinner /> : 'Log In With Google'}
          </Button>
        </Flex>
      </Flex>
    </AuthWrapper>
  )
}
