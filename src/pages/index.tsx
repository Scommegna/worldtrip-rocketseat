import { Box } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import MidSection from "../components/MidSection";

export default function Home() {
  return (
    <>
      <Box as="main" width="100%" display="flex" flexDir="column">
        <HeroSection />
        <MidSection />
      </Box>
    </>
  );
}
