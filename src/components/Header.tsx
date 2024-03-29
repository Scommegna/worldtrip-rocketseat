import Image from "next/image";
import Logo from "../../public/Logo.svg";

import { Box, Image as ChakraImage } from "@chakra-ui/react";
import Link from "next/link";

// Application header
export default function Header() {
  return (
    <Box as={Link} bg="light.white" maxW="100vw" href="/">
      <ChakraImage
        as={Image}
        src={Logo}
        alt="World Trip Banner"
        display="block"
        w={["120px", "auto"]}
        my={0}
        mx="auto"
        py={6}
      />
    </Box>
  );
}
