import { Box, Link, VStack } from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import HomeBackground from "../../components/home-background";
import { getAllPostIds, getPostData, PostData, PostId } from "../../lib/posts";

interface PostDataProps {
  postData: PostData;
}

export default function Post({ postData }: PostDataProps) {
  return (
    <HomeBackground>
      <VStack>
        <NextLink href="/">
          <Link>Home</Link>
        </NextLink>
        <Box>{postData.title}</Box>
        <Box>{postData.id}</Box>
        <Box>{postData.date}</Box>
      </VStack>
    </HomeBackground>
  );
}

export async function getStaticProps({ params }: PostId) {
  const postData = getPostData(params.id);
  return {
    props: { postData },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
