import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { Box, Button, Center, extendTheme, VStack } from "@chakra-ui/react";

const Header = ({ title }) => {
  return <h1>{title ? title : "Default title"}</h1>;
};

const theme = extendTheme({});

const HomePage = () => {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <Center>
        <VStack spacing={4}>
          <Header title="Develop. Preview. Ship. 🚀" />
          <Button onClick={() => setLikes(likes + 1)}>Like ({likes})</Button>
        </VStack>
      </Center>
    </ChakraProvider>
  );
};

export default HomePage;
