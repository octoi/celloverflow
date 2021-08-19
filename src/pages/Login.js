import React from 'react';
import AuthWrapper from '../components/AuthWrapper';
import getUserObject from '../utils/loginHelper';
import { Flex, Heading, Button, Link, Text, useToast } from '@chakra-ui/react';
import { auth, provider } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { Login as userLogin } from '../redux/actions/userLogin';

export default function Login() {
  const showToast = useToast();
  const dispatchAction = useDispatch();

  const loginWithGoogle = () => {
    auth.signInWithPopup(provider).then(userData => {
      const user = getUserObject(userData); // getting wanted user data user data 
      dispatchAction(userLogin(user));
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
            <Link href='/page?type=terms'> Terms & services</Link>
          </Text>
          <Button onClick={loginWithGoogle} size="lg" width='100%' style={{ background: 'var(--accent-color)' }}>
            Log In With Google
          </Button>
        </Flex>
      </Flex>
    </AuthWrapper>
  )
}
