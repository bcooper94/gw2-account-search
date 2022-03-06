import { default as NextLink } from "next/link";
import Head from "next/head";
import { Center, Heading, Link, VStack } from "@chakra-ui/react";

const FirstPost: React.FC = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Center>
        <VStack>
          <Heading>First Post</Heading>
          <NextLink href="/">
            <Link>Home</Link>
          </NextLink>
        </VStack>
      </Center>
    </>
  );
};

export default FirstPost;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
