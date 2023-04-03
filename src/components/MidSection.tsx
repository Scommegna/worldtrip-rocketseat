import {
  Box,
  Divider,
  Heading,
  Image as ChakraImage,
  SimpleGrid,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import { useBreakpointValue } from "@chakra-ui/react";

import Nightlife from "../../public/Nightlife.svg";
import Beach from "../../public/Beach.svg";
import Modern from "../../public/Modern.svg";
import Classic from "../../public/Classic.svg";
import More from "../../public/More.svg";
import CircleIcon from "./CircleIcon";

// Mid Section component
export default function MidSection() {
  const isWide = useBreakpointValue({ sm: false, md: true, lg: true });

  if (isWide) {
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
            lineHeight={["2.3rem", "3.25rem"]}
            color="dark.headingAndText"
            fontWeight="500"
            fontSize={[20, 36]}
          >
            Vamos nessa? <br></br> Então escolha o seu continente.
          </Heading>
        </Box>
      </Box>
    );
  } else {
    return (
      <>
        <VStack m="0 auto" marginBottom={31} marginTop={10} spacing={8}>
          <SimpleGrid columns={2} spacing={10}>
            <HStack>
              <CircleIcon />
              <Heading
                fontSize={20}
                fontWeight={500}
                color="dark.headingAndText"
              >
                Vida Noturna
              </Heading>
            </HStack>
            <HStack>
              <CircleIcon />
              <Heading
                fontSize={20}
                fontWeight={500}
                color="dark.headingAndText"
              >
                Moderno
              </Heading>
            </HStack>
            <HStack>
              <CircleIcon />
              <Heading
                fontSize={20}
                fontWeight={500}
                color="dark.headingAndText"
              >
                Praia
              </Heading>
            </HStack>
            <HStack>
              <CircleIcon />
              <Heading
                fontSize={20}
                fontWeight={500}
                color="dark.headingAndText"
              >
                Clássico
              </Heading>
            </HStack>
          </SimpleGrid>
          <HStack marginTop={10}>
            <CircleIcon />
            <Heading fontSize={20} fontWeight={500} color="dark.headingAndText">
              e mais...
            </Heading>
          </HStack>
          <Box w="90px" m="0 auto" mb="52px">
            <Divider borderColor="dark.black" />
          </Box>
        </VStack>
      </>
    );
  }
}
