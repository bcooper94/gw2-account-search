import { VStack, Heading, Link } from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import HomeBackground from "../components/home-background";
import { getAllPostIds, PostId } from "../lib/posts";

interface HomePageProps {
  postIds: PostId[];
}

const HomePage: React.FC<HomePageProps> = ({ postIds }) => {
  const postIdLinks = postIds.map((postId) => {
    return (
      <NextLink href={`/posts/${postId.params.id}`}>
        <Link>{postId.params.id}</Link>
      </NextLink>
    );
  });
  return (
    <HomeBackground>
      <VStack spacing={4}>
        <Heading>Test Heading</Heading>
        {postIdLinks}
      </VStack>
    </HomeBackground>
  );
};

export default HomePage;

export async function getStaticProps(context) {
  const postIds = getAllPostIds();
  return {
    props: {
      postIds,
    },
  };
}
