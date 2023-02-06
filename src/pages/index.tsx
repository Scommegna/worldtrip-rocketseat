import { Box } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import MidSection from "../components/MidSection";
import SwiperComponent from "../components/SwiperComponent";

export default function Home() {
  return (
    <>
      <Box as="main" width="100%" display="flex" flexDir="column">
        <HeroSection />
        <MidSection />
        <SwiperComponent />
      </Box>
    </>
  );
}
