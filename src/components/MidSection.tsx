import { Box, Divider, Heading, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";

import Nightlife from "../../public/Nightlife.svg";
import Beach from "../../public/Beach.svg";
import Modern from "../../public/Modern.svg";
import Classic from "../../public/Classic.svg";
import More from "../../public/More.svg";

// Mid Section component
export default function MidSection() {
  return (
    <Box
      m="auto"
      mb="82px"
      mt="100px"
      display="flex"
      flexDir="column"
      width="70%"
    >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        mb="100px"
      >
        <Box>
          <ChakraImage as={Image} src={Nightlife} alt="Nightlife Icon" />
        </Box>
        <Box>
          <ChakraImage as={Image} src={Beach} alt="Beach Icon" />
        </Box>
        <Box>
          <ChakraImage as={Image} src={Modern} alt="Modern Icon" />
        </Box>
        <Box>
          <ChakraImage as={Image} src={Classic} alt="Classic Icon" />
        </Box>
        <Box>
          <ChakraImage as={Image} src={More} alt="More Icon" />
        </Box>
      </Box>
      <Box w="90px" m="0 auto" mb="52px">
        <Divider borderColor="dark.black" />
      </Box>
      <Box m="0 auto">
        <Heading
          textAlign="center"
          lineHeight="3.25rem"
          color="dark.headingAndText"
          fontWeight="500"
        >
          Vamos nessa? <br></br> Então escolha o seu continente.
        </Heading>
      </Box>
    </Box>
  );
}
