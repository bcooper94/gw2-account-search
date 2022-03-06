import { Heading } from "@chakra-ui/react";
import HomeBackground from "../components/home-background";

const Custom500: React.FC = () => {
  return (
    <HomeBackground>
      <Heading>500 - Server-side error occurred</Heading>
    </HomeBackground>
  );
};

export default Custom500;
