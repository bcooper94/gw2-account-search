import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { Button, Center, extendTheme, VStack, Heading } from "@chakra-ui/react";

const theme = extendTheme({});

const HomePage: React.FC = () => {
  const [likes, setLikes] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <Center>
        <VStack spacing={4}>
          <Heading>Test Heading</Heading>
          <Button onClick={() => setLikes(likes + 1)}>Like ({likes})</Button>
        </VStack>
      </Center>
    </ChakraProvider>
  );
};

export default HomePage;
