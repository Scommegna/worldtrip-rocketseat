import Image from "next/image";
import Logo from "../../public/Logo.svg";

import { Box, Image as ChakraImage } from "@chakra-ui/react";

// Application header
export default function Header() {
  return (
    <Box bg="light.white" maxW="100vw">
      <ChakraImage
        as={Image}
        src={Logo}
        alt="World Trip Banner"
        display="block"
        my={0}
        mx="auto"
        py={6}
      />
    </Box>
  );
}
