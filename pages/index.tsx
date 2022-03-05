import React, { useState } from "react";
import { Button, Center, VStack, Heading, Link } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

const HomePage: React.FC = () => {
  const [likes, setLikes] = useState(0);

  return (
    <Center>
      <VStack spacing={4}>
        <Heading>Test Heading</Heading>
        <NextLink href="/posts/first-post">
          <Link>First Post</Link>
        </NextLink>
        <Button onClick={() => setLikes(likes + 1)}>Like ({likes})</Button>
      </VStack>
    </Center>
  );
};

export default HomePage;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
