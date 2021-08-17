import React from 'react';
import { Flex, Heading, Button, Link, Text } from '@chakra-ui/react';
import getRandomRickRollLink from '../utils/rickRoll';

export default function Login() {
  return (
    <Flex height="90vh" alignItems="center" justifyContent="center" >
      <Flex direction="column" width="45vh" background="var(--secondary-color)" p={12} rounded={6}>
        <Heading mb={4}>Get started</Heading>
        <Text mb={4} opacity="0.5">
          By signing in you agree our
          <Link href='/page?type=terms'> Terms & services</Link>
        </Text>
        <Button size="lg" width='100%' style={{ background: 'var(--accent-color)' }}>
          Log In With Google
        </Button>
      </Flex>
    </Flex>
  )
}
