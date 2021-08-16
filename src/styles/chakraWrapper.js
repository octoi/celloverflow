import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// dark theme for CHAKRA UI
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
});

export default function ChakraWrap({ children }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}