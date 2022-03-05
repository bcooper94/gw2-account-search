import { Center, Heading, Link, VStack } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

const FirstPost: React.FC = () => {
  return (
    <Center>
      <VStack>
        <Heading>First Post</Heading>
        <NextLink href="/">
          <Link>Home</Link>
        </NextLink>
      </VStack>
    </Center>
  );
};

export default FirstPost;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
