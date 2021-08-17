import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Link as StyledLink, Flex } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Flex justifyContent="center" alignItems="center" height="80vh" direction="column">
      <Text fontSize="9xl">4🙈4</Text>
      <Text fontSize="xl">Seems like you are in wrong place</Text>
      <StyledLink opacity="0.8" mt={4} as={Link} to="/">Back To Home</StyledLink>
    </Flex>
  )
}