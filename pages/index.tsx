import { VStack, Heading, Link } from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import HomeBackground from "../components/home-background";

const HomePage: React.FC = () => {
  return (
    <HomeBackground>
      <VStack spacing={4}>
        <Heading>Test Heading</Heading>
        <NextLink href="/posts/first-post">
          <Link>First Post</Link>
        </NextLink>
      </VStack>
    </HomeBackground>
  );
};

export default HomePage;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
